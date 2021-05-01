export interface Icrypto{
  currency: string;
  id: string;
  status: string;
  price: string;
  price_date: Date;
  price_timestamp: Date;
  symbol: string;
  circulating_supply: string;
  max_supply: string;
  name: string;
  logo_url: string;
  market_cap: string;
  transparent_market_cap: string;
  num_exchanges: string;
  num_pairs: string;
  num_pairs_unmapped: string;
  first_candle: Date;
  first_trade: Date;
  first_order_book: Date;
  first_priced_at: Date;
  rank: string;
  rank_delta: string;
  high: string;
  high_timestamp: string;
  _1d: cryptoInfo;

}

export interface cryptoInfo {
  price_change: string;
  price_change_pct: string;
  volume: string;
  volume_change: string;
  volume_change_pct: string;
  market_cap_change: string;
  market_cap_change_pct: string;
  transparent_market_cap_change: string;
  transparent_market_cap_change_pct: string;
  volume_transparency: any[];
}



