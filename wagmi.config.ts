import { defineConfig } from '@wagmi/cli'
import { react } from '@wagmi/cli/plugins'
import { abi as GoSwapShopAbi } from '../program/out/GoSwapShopRelayer.sol/GoSwapShopRelayer.json'

export default defineConfig({
  out: 'index.ts',
  contracts: [
    {
        name: 'GoSwapShopRelayer',
        abi: GoSwapShopAbi as any,
    },
  ],
  plugins: [
      react(),
  ],
})
