import React from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { Star, Star1 } from "iconsax-react";

export default function CoinItems({ coin }) {
  return (
    <tr key={coin.id}>
      <td>
        <Star1 size={16} />
      </td>
      <td>{coin.market_cap_rank}</td>
      <td>
        <div>
          <img src={coin.image} alt={coin.id} />
          <span className="ml-2">{coin.name}</span>
        </div>
      </td>
      <td>{coin.symbol}</td>
      <td>{coin.current_price}</td>
      <td>%{coin.price_change_percentage_24h}</td>
      <td>{coin.total_volume}</td>
      <td>{coin.market_cap}</td>
      <td>
        <Sparklines data={coin.sparkline_in_7d.price}>
          <SparklinesLine color="blue" />
        </Sparklines>
      </td>
    </tr>
  );
}
