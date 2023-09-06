import { Component, OnInit, ElementRef, ViewChild, HostListener } from '@angular/core';
@Component({
  selector: 'shared-particle',
  templateUrl: './particle.component.html',
  styleUrls: ['./particle.component.css']
})
export class ParticleComponent implements OnInit {
  
  @ViewChild('canvas', { static: true }) canvasRef!: ElementRef;
  private canvas!: HTMLCanvasElement;
  private context!: CanvasRenderingContext2D;
  private particles: any[] = [];
  private hue = 0;

  ngOnInit(): void {
    this.canvas = this.canvasRef.nativeElement;
    this.context = this.canvas.getContext('2d')!;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.animate();
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    const particle = {
      x: event.clientX,
      y: event.clientY,
      size: Math.random() * 2 + 0.1,
      speedx: Math.random() * 2 - 1,
      speedy: Math.random() * 2 - 1,
      color: `hsl(${this.hue}, 100%, 50%)`
    };
    this.particles.push(particle);
  }

  animate(): void {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.handleParticles();
    this.hue++;
    requestAnimationFrame(() => this.animate());
  }
  handleParticles(): void {
    for (let i = 0; i < this.particles.length; i++) {
      const particle = this.particles[i];
      particle.x += particle.speedx;
      particle.y += particle.speedy;
      if (particle.size > 0.1) particle.size -= 0.03;
      this.drawParticle(particle);
      this.handleCollisions(particle, i);
      if (particle.size <= 0.3) {
        this.particles.splice(i, 1);
        i--;
      }
    }
  }
  drawParticle(particle: any): void {
    this.context.fillStyle = particle.color;
    this.context.beginPath();
    this.context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
    this.context.fill();
  }
  handleCollisions(particle: any, index: number): void {
    for (let j = index; j < this.particles.length; j++) {
      const otherParticle = this.particles[j];
      const dx = particle.x - otherParticle.x;
      const dy = particle.y - otherParticle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < 90) {
        this.context.beginPath();
        this.context.strokeStyle = particle.color;
        this.context.lineWidth = particle.size / 10;
        this.context.moveTo(particle.x, particle.y);
        this.context.lineTo(otherParticle.x, otherParticle.y);
        this.context.stroke();
      }
    }
  }
}
