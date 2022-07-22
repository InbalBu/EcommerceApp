import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import product from './product'
import user from './user'
import sneakers from './sneakers'
import wallets from './wallets'
import shoppingBags from './shoppingBags'
import backpack from './backpack'
import shoes from './shoes'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([product, user, sneakers, wallets, shoppingBags, backpack, shoes]),
})

