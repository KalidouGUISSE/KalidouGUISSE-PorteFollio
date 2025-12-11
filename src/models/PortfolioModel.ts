import { PortfolioData } from '../types/portfolio';
import { Observable } from '../utils/Observer';
import { getInitialPortfolioData } from '../data/portfolioData';

export class PortfolioModel extends Observable<PortfolioData> {
  private static instance: PortfolioModel;
  private data: PortfolioData;

  private constructor() {
    super();
    this.data = getInitialPortfolioData();
  }

  public static getInstance(): PortfolioModel {
    if (!PortfolioModel.instance) {
      PortfolioModel.instance = new PortfolioModel();
    }
    return PortfolioModel.instance;
  }

  public getData(): PortfolioData {
    return { ...this.data };
  }

  public updateData(newData: Partial<PortfolioData>): void {
    this.data = { ...this.data, ...newData };
    this.notify(this.data);
  }

}
