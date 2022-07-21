import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import product from './product'
import user from './user'
import sneakers from './sneakers'
import wallets from './wallets'
import shoppingBags from './shoppingBags'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([product, user, sneakers, wallets, shoppingBags]),
})

