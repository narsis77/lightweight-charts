import { IPaneView } from '../views/pane/ipane-view';
import { IPriceAxisView } from '../views/price-axis/iprice-axis-view';
import { ITimeAxisView } from '../views/time-axis/itime-axis-view';

import { IDataSource } from './idata-source';
import { IPaneBase, Pane } from './pane';
import { PriceScale } from './price-scale';

export abstract class DataSource<HorzScaleItem> implements IDataSource<HorzScaleItem> {
	protected _priceScale: PriceScale | null = null;

	private _zorder: number = 0;

	public zorder(): number {
		return this._zorder;
	}

	public setZorder(zorder: number): void {
		this._zorder = zorder;
	}

	public priceScale(): PriceScale | null {
		return this._priceScale;
	}

	public setPriceScale(priceScale: PriceScale | null): void {
		this._priceScale = priceScale;
	}

	public abstract priceAxisViews(pane?: Pane<HorzScaleItem>, priceScale?: PriceScale): readonly IPriceAxisView[];
	public abstract paneViews(pane?: IPaneBase): readonly IPaneView[];

	public labelPaneViews(pane?: IPaneBase): readonly IPaneView[] {
		return [];
	}

	public timeAxisViews(): readonly ITimeAxisView<HorzScaleItem>[] {
		return [];
	}

	public visible(): boolean {
		return true;
	}

	public abstract updateAllViews(): void;
}
