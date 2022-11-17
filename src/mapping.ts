import { MarketItemCreated } from '../generated/marketplace/marketplace'
import { MarketItem } from '../generated/schema'

export function handleMarketItemCreated(event: MarketItemCreated): void {
  let marketItem = new MarketItem(event.params.id.toHex())
  marketItem.seller = event.params.seller
  marketItem.owner = event.params.owner
  marketItem.price = event.params.price
  marketItem.sold = event.params.sold
  marketItem.save()
}
