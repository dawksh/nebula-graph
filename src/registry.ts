import { AtomRegistered as AtomRegisteredEvent } from "../generated/Registry/Registry"
import { AtomRegistered } from "../generated/schema"

export function handleAtomRegistered(event: AtomRegisteredEvent): void {
  let entity = new AtomRegistered(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.uid = event.params.uid
  entity.atom = event.params.atom

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
