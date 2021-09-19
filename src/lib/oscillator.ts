export class Oscillator {
  isPlaying = false;
  oscillator: OscillatorNode;
  context: AudioContext;

  constructor({ context }: { context: AudioContext }) {
    this.context = context;
    this.oscillator = context.createOscillator();
    this.oscillator.type = "sine";
    this.connect();
  }

  connect() {
    return this.oscillator.connect(this.context.destination);
  }

  play() {
    return this.oscillator[this.oscillator.start ? "start" : "noteOn"](0);
  }

  stop() {
    return this.oscillator.stop(0);
  }

  pause() {
    return this.oscillator.disconnect();
  }

  frequency() {
    return this.oscillator.frequency.value;
  }

  changeFrequency(value: number) {
    return (this.oscillator.frequency.value = value);
  }

  changeDetune(value: number) {
    return (this.oscillator.detune.value = value);
  }

  changeType(type: OscillatorType) {
    return (this.oscillator.type = type);
  }
}
