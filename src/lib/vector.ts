import { Oscillator } from "./oscillator";

export class Vector {
  context: AudioContext;
  oscillator: Oscillator;
  playing: boolean;
  angle: number;

  constructor({ context, angle }: { context: AudioContext; angle: number }) {
    this.context = context;
    this.oscillator = new Oscillator({ context });
    this.rotate(angle);
  }

  rotate(angle: number) {
    this.angle = angle;
    this.oscillator.changeFrequency(angle);
  }

  on() {
    if (this.playing) {
      this.oscillator.connect();
      return;
    }

    this.playing = true;
    this.oscillator.play();
  }

  off() {
    this.oscillator.pause();
  }
}
