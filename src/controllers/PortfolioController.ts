import { PortfolioModel } from '../models/PortfolioModel';
import { PortfolioData } from '../types/portfolio';

export interface ContactStrategy {
  handle(value: string): void;
}

export class PhoneStrategy implements ContactStrategy {
  handle(value: string): void {
    window.location.href = `tel:${value}`;
  }
}

export class EmailStrategy implements ContactStrategy {
  handle(value: string): void {
    window.location.href = `mailto:${value}`;
  }
}

export class WhatsAppStrategy implements ContactStrategy {
  handle(value: string): void {
    const cleanNumber = value.replace(/\D/g, '');
    window.open(`https://wa.me/${cleanNumber}`, '_blank');
  }
}

export class LinkedInStrategy implements ContactStrategy {
  handle(value: string): void {
    window.open(value, '_blank');
  }
}

export class PortfolioController {
  private static instance: PortfolioController;
  private model: PortfolioModel;
  private strategies: Map<string, ContactStrategy>;

  private constructor() {
    this.model = PortfolioModel.getInstance();
    this.strategies = new Map();
    this.initializeStrategies();
  }

  public static getInstance(): PortfolioController {
    if (!PortfolioController.instance) {
      PortfolioController.instance = new PortfolioController();
    }
    return PortfolioController.instance;
  }

  private initializeStrategies(): void {
    this.strategies.set('phone', new PhoneStrategy());
    this.strategies.set('email', new EmailStrategy());
    this.strategies.set('whatsapp', new WhatsAppStrategy());
    this.strategies.set('linkedin', new LinkedInStrategy());
  }

  public getPortfolioData(): PortfolioData {
    return this.model.getData();
  }

  public handleContact(type: string, value: string): void {
    const strategy = this.strategies.get(type);
    if (strategy) {
      strategy.handle(value);
    } else {
      console.error(`Unknown contact type: ${type}`);
    }
  }

  public subscribeToUpdates(callback: (data: PortfolioData) => void): void {
    this.model.subscribe(callback);
  }

  public unsubscribeFromUpdates(callback: (data: PortfolioData) => void): void {
    this.model.unsubscribe(callback);
  }
}
