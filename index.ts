import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// GoSwapShopRelayer
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const goSwapShopRelayerAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'defaultOwner_', internalType: 'address', type: 'address' },
      { name: 'signatureVerifier_', internalType: 'address', type: 'address' },
      { name: 'wormhole_', internalType: 'address', type: 'address' },
      { name: 'tokenBridge_', internalType: 'address', type: 'address' },
      { name: 'chainId_', internalType: 'uint16', type: 'uint16' },
      { name: 'wormholeFinality_', internalType: 'uint8', type: 'uint8' },
      { name: 'feePrecision_', internalType: 'uint32', type: 'uint32' },
      { name: 'relayerFeePercentage_', internalType: 'uint32', type: 'uint32' },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'product', internalType: 'uint256', type: 'uint256' },
      { name: 'fee', internalType: 'uint8', type: 'uint8' },
    ],
    name: 'calculateFee',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'product', internalType: 'uint256', type: 'uint256' },
      {
        name: 'direction',
        internalType: 'enum GoSwapShopRelayerStructs.MakerOrTaker',
        type: 'uint8',
      },
    ],
    name: 'calculateFeeRate',
    outputs: [{ name: 'fee', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'product', internalType: 'uint256', type: 'uint256' },
      { name: 'fee', internalType: 'uint8', type: 'uint8' },
      {
        name: 'direction',
        internalType: 'enum GoSwapShopRelayerStructs.MakerOrTaker',
        type: 'uint8',
      },
    ],
    name: 'calculateProduct',
    outputs: [
      { name: 'productAmount', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    name: 'calculateRelayerFee',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'orderId_', internalType: 'bytes32', type: 'bytes32' },
      { name: 'token_', internalType: 'address', type: 'address' },
      { name: 'signature_', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'cancelTheOrder',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'chainId',
    outputs: [{ name: '', internalType: 'uint16', type: 'uint16' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'orderId_', internalType: 'bytes32', type: 'bytes32' },
      { name: 'token_', internalType: 'address', type: 'address' },
      { name: 'signature_', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'claimTheOrder',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: 'orderId_', internalType: 'bytes32', type: 'bytes32' }],
    name: 'confirmTheOrder',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'orderId_', internalType: 'bytes32', type: 'bytes32' },
      { name: 'amount_', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'createAnOrder',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: 'encodedMessage', internalType: 'bytes', type: 'bytes' }],
    name: 'decodePayload',
    outputs: [
      {
        name: 'parsedMessage',
        internalType:
          'struct GoSwapShopRelayerStructs.GoSwapShopRelayerMessage',
        type: 'tuple',
        components: [
          { name: 'payloadID', internalType: 'uint8', type: 'uint8' },
          { name: 'targetRecipient', internalType: 'bytes32', type: 'bytes32' },
        ],
      },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'parsedMessage',
        internalType:
          'struct GoSwapShopRelayerStructs.GoSwapShopRelayerMessage',
        type: 'tuple',
        components: [
          { name: 'payloadID', internalType: 'uint8', type: 'uint8' },
          { name: 'targetRecipient', internalType: 'bytes32', type: 'bytes32' },
        ],
      },
    ],
    name: 'encodePayload',
    outputs: [{ name: 'encodedMessage', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'feePrecision',
    outputs: [{ name: '', internalType: 'uint32', type: 'uint32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'payload', internalType: 'bytes', type: 'bytes' }],
    name: 'fetchLocalAddressFromTransferMessage',
    outputs: [
      { name: 'localAddress', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'user_', internalType: 'address', type: 'address' },
      { name: 'orderId_', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'getOrderData',
    outputs: [
      {
        name: '',
        internalType: 'struct GoSwapShopRelayerStructs.Order',
        type: 'tuple',
        components: [
          { name: 'fee', internalType: 'uint8', type: 'uint8' },
          {
            name: 'orderOwner',
            internalType: 'enum GoSwapShopRelayerStructs.MakerOrTaker',
            type: 'uint8',
          },
          { name: 'chainId', internalType: 'uint16', type: 'uint16' },
          { name: 'claimDeadline', internalType: 'uint80', type: 'uint80' },
          { name: 'amount', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'emitterChainId', internalType: 'uint16', type: 'uint16' },
    ],
    name: 'getRegisteredEmitter',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'orderId_', internalType: 'bytes32', type: 'bytes32' }],
    name: 'isOrderExisted',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'chainId_', internalType: 'uint16', type: 'uint16' },
      { name: 'orderId_', internalType: 'bytes32', type: 'bytes32' },
      { name: 'amount_', internalType: 'uint256', type: 'uint256' },
      { name: 'token_', internalType: 'address', type: 'address' },
      { name: 'signature_', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'placeAnOrder',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'encodedTransferMessage', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'redeemTransferWithPayload',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'emitterChainId', internalType: 'uint16', type: 'uint16' },
      { name: 'emitterAddress', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'registerEmitter',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'relayerFeePercentage',
    outputs: [{ name: '', internalType: 'uint32', type: 'uint32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'batchId_', internalType: 'uint32', type: 'uint32' },
      { name: 'orderId_', internalType: 'bytes32', type: 'bytes32' },
      { name: 'token_', internalType: 'address', type: 'address' },
      { name: 'targetRecipient_', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'sendTokensWithPayload',
    outputs: [
      { name: 'messageSequence', internalType: 'uint64', type: 'uint64' },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: 'target_', internalType: 'address', type: 'address' }],
    name: 'setSignatureVerifier',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'tokenBridge',
    outputs: [
      { name: '', internalType: 'contract ITokenBridge', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'target_', internalType: 'address', type: 'address' }],
    name: 'transferOwnerShip',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'relayerFeePercentage', internalType: 'uint32', type: 'uint32' },
      { name: 'relayerFeePrecision', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'updateRelayerFee',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'wormhole',
    outputs: [
      { name: '', internalType: 'contract IWormhole', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'wormholeFinality',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'orderId',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      {
        name: 'order',
        internalType: 'struct GoSwapShopRelayerStructs.Order',
        type: 'tuple',
        components: [
          { name: 'fee', internalType: 'uint8', type: 'uint8' },
          {
            name: 'orderOwner',
            internalType: 'enum GoSwapShopRelayerStructs.MakerOrTaker',
            type: 'uint8',
          },
          { name: 'chainId', internalType: 'uint16', type: 'uint16' },
          { name: 'claimDeadline', internalType: 'uint80', type: 'uint80' },
          { name: 'amount', internalType: 'uint256', type: 'uint256' },
        ],
        indexed: false,
      },
    ],
    name: 'OrderCanceled',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'orderId',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      {
        name: 'order',
        internalType: 'struct GoSwapShopRelayerStructs.Order',
        type: 'tuple',
        components: [
          { name: 'fee', internalType: 'uint8', type: 'uint8' },
          {
            name: 'orderOwner',
            internalType: 'enum GoSwapShopRelayerStructs.MakerOrTaker',
            type: 'uint8',
          },
          { name: 'chainId', internalType: 'uint16', type: 'uint16' },
          { name: 'claimDeadline', internalType: 'uint80', type: 'uint80' },
          { name: 'amount', internalType: 'uint256', type: 'uint256' },
        ],
        indexed: false,
      },
    ],
    name: 'OrderClaimed',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'orderId',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      {
        name: 'order',
        internalType: 'struct GoSwapShopRelayerStructs.Order',
        type: 'tuple',
        components: [
          { name: 'fee', internalType: 'uint8', type: 'uint8' },
          {
            name: 'orderOwner',
            internalType: 'enum GoSwapShopRelayerStructs.MakerOrTaker',
            type: 'uint8',
          },
          { name: 'chainId', internalType: 'uint16', type: 'uint16' },
          { name: 'claimDeadline', internalType: 'uint80', type: 'uint80' },
          { name: 'amount', internalType: 'uint256', type: 'uint256' },
        ],
        indexed: false,
      },
    ],
    name: 'OrderConfirmed',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'orderId',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      {
        name: 'order',
        internalType: 'struct GoSwapShopRelayerStructs.Order',
        type: 'tuple',
        components: [
          { name: 'fee', internalType: 'uint8', type: 'uint8' },
          {
            name: 'orderOwner',
            internalType: 'enum GoSwapShopRelayerStructs.MakerOrTaker',
            type: 'uint8',
          },
          { name: 'chainId', internalType: 'uint16', type: 'uint16' },
          { name: 'claimDeadline', internalType: 'uint80', type: 'uint80' },
          { name: 'amount', internalType: 'uint256', type: 'uint256' },
        ],
        indexed: false,
      },
    ],
    name: 'OrderCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'orderId',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      {
        name: 'order',
        internalType: 'struct GoSwapShopRelayerStructs.Order',
        type: 'tuple',
        components: [
          { name: 'fee', internalType: 'uint8', type: 'uint8' },
          {
            name: 'orderOwner',
            internalType: 'enum GoSwapShopRelayerStructs.MakerOrTaker',
            type: 'uint8',
          },
          { name: 'chainId', internalType: 'uint16', type: 'uint16' },
          { name: 'claimDeadline', internalType: 'uint80', type: 'uint80' },
          { name: 'amount', internalType: 'uint256', type: 'uint256' },
        ],
        indexed: false,
      },
    ],
    name: 'OrderPlaced',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'orderId',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      {
        name: 'order',
        internalType: 'struct GoSwapShopRelayerStructs.Order',
        type: 'tuple',
        components: [
          { name: 'fee', internalType: 'uint8', type: 'uint8' },
          {
            name: 'orderOwner',
            internalType: 'enum GoSwapShopRelayerStructs.MakerOrTaker',
            type: 'uint8',
          },
          { name: 'chainId', internalType: 'uint16', type: 'uint16' },
          { name: 'claimDeadline', internalType: 'uint80', type: 'uint80' },
          { name: 'amount', internalType: 'uint256', type: 'uint256' },
        ],
        indexed: false,
      },
    ],
    name: 'OrderSent',
  },
  {
    type: 'error',
    inputs: [{ name: 'target', internalType: 'address', type: 'address' }],
    name: 'AddressEmptyCode',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'AddressInsufficientBalance',
  },
  { type: 'error', inputs: [], name: 'ECDSAInvalidSignature' },
  {
    type: 'error',
    inputs: [{ name: 'length', internalType: 'uint256', type: 'uint256' }],
    name: 'ECDSAInvalidSignatureLength',
  },
  {
    type: 'error',
    inputs: [{ name: 's', internalType: 'bytes32', type: 'bytes32' }],
    name: 'ECDSAInvalidSignatureS',
  },
  { type: 'error', inputs: [], name: 'FailedInnerCall' },
  {
    type: 'error',
    inputs: [{ name: 'message', internalType: 'string', type: 'string' }],
    name: 'Forbidden',
  },
  {
    type: 'error',
    inputs: [
      { name: 'actualAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'requiredAmount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'msgSender', internalType: 'address', type: 'address' }],
    name: 'NotRelayer',
  },
  {
    type: 'error',
    inputs: [{ name: 'orderId', internalType: 'bytes32', type: 'bytes32' }],
    name: 'OrderExisted',
  },
  { type: 'error', inputs: [], name: 'OrderLocked' },
  {
    type: 'error',
    inputs: [{ name: 'orderId', internalType: 'bytes32', type: 'bytes32' }],
    name: 'OrderUnconfirmed',
  },
  { type: 'error', inputs: [], name: 'ReentrancyGuardReentrantCall' },
  {
    type: 'error',
    inputs: [{ name: 'token', internalType: 'address', type: 'address' }],
    name: 'SafeERC20FailedOperation',
  },
  { type: 'error', inputs: [], name: 'TransferFailed' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link goSwapShopRelayerAbi}__
 */
export const useReadGoSwapShopRelayer = /*#__PURE__*/ createUseReadContract({
  abi: goSwapShopRelayerAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link goSwapShopRelayerAbi}__ and `functionName` set to `"calculateFee"`
 */
export const useReadGoSwapShopRelayerCalculateFee =
  /*#__PURE__*/ createUseReadContract({
    abi: goSwapShopRelayerAbi,
    functionName: 'calculateFee',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link goSwapShopRelayerAbi}__ and `functionName` set to `"calculateFeeRate"`
 */
export const useReadGoSwapShopRelayerCalculateFeeRate =
  /*#__PURE__*/ createUseReadContract({
    abi: goSwapShopRelayerAbi,
    functionName: 'calculateFeeRate',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link goSwapShopRelayerAbi}__ and `functionName` set to `"calculateProduct"`
 */
export const useReadGoSwapShopRelayerCalculateProduct =
  /*#__PURE__*/ createUseReadContract({
    abi: goSwapShopRelayerAbi,
    functionName: 'calculateProduct',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link goSwapShopRelayerAbi}__ and `functionName` set to `"calculateRelayerFee"`
 */
export const useReadGoSwapShopRelayerCalculateRelayerFee =
  /*#__PURE__*/ createUseReadContract({
    abi: goSwapShopRelayerAbi,
    functionName: 'calculateRelayerFee',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link goSwapShopRelayerAbi}__ and `functionName` set to `"chainId"`
 */
export const useReadGoSwapShopRelayerChainId =
  /*#__PURE__*/ createUseReadContract({
    abi: goSwapShopRelayerAbi,
    functionName: 'chainId',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link goSwapShopRelayerAbi}__ and `functionName` set to `"decodePayload"`
 */
export const useReadGoSwapShopRelayerDecodePayload =
  /*#__PURE__*/ createUseReadContract({
    abi: goSwapShopRelayerAbi,
    functionName: 'decodePayload',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link goSwapShopRelayerAbi}__ and `functionName` set to `"encodePayload"`
 */
export const useReadGoSwapShopRelayerEncodePayload =
  /*#__PURE__*/ createUseReadContract({
    abi: goSwapShopRelayerAbi,
    functionName: 'encodePayload',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link goSwapShopRelayerAbi}__ and `functionName` set to `"feePrecision"`
 */
export const useReadGoSwapShopRelayerFeePrecision =
  /*#__PURE__*/ createUseReadContract({
    abi: goSwapShopRelayerAbi,
    functionName: 'feePrecision',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link goSwapShopRelayerAbi}__ and `functionName` set to `"fetchLocalAddressFromTransferMessage"`
 */
export const useReadGoSwapShopRelayerFetchLocalAddressFromTransferMessage =
  /*#__PURE__*/ createUseReadContract({
    abi: goSwapShopRelayerAbi,
    functionName: 'fetchLocalAddressFromTransferMessage',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link goSwapShopRelayerAbi}__ and `functionName` set to `"getOrderData"`
 */
export const useReadGoSwapShopRelayerGetOrderData =
  /*#__PURE__*/ createUseReadContract({
    abi: goSwapShopRelayerAbi,
    functionName: 'getOrderData',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link goSwapShopRelayerAbi}__ and `functionName` set to `"getRegisteredEmitter"`
 */
export const useReadGoSwapShopRelayerGetRegisteredEmitter =
  /*#__PURE__*/ createUseReadContract({
    abi: goSwapShopRelayerAbi,
    functionName: 'getRegisteredEmitter',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link goSwapShopRelayerAbi}__ and `functionName` set to `"isOrderExisted"`
 */
export const useReadGoSwapShopRelayerIsOrderExisted =
  /*#__PURE__*/ createUseReadContract({
    abi: goSwapShopRelayerAbi,
    functionName: 'isOrderExisted',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link goSwapShopRelayerAbi}__ and `functionName` set to `"owner"`
 */
export const useReadGoSwapShopRelayerOwner =
  /*#__PURE__*/ createUseReadContract({
    abi: goSwapShopRelayerAbi,
    functionName: 'owner',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link goSwapShopRelayerAbi}__ and `functionName` set to `"relayerFeePercentage"`
 */
export const useReadGoSwapShopRelayerRelayerFeePercentage =
  /*#__PURE__*/ createUseReadContract({
    abi: goSwapShopRelayerAbi,
    functionName: 'relayerFeePercentage',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link goSwapShopRelayerAbi}__ and `functionName` set to `"tokenBridge"`
 */
export const useReadGoSwapShopRelayerTokenBridge =
  /*#__PURE__*/ createUseReadContract({
    abi: goSwapShopRelayerAbi,
    functionName: 'tokenBridge',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link goSwapShopRelayerAbi}__ and `functionName` set to `"wormhole"`
 */
export const useReadGoSwapShopRelayerWormhole =
  /*#__PURE__*/ createUseReadContract({
    abi: goSwapShopRelayerAbi,
    functionName: 'wormhole',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link goSwapShopRelayerAbi}__ and `functionName` set to `"wormholeFinality"`
 */
export const useReadGoSwapShopRelayerWormholeFinality =
  /*#__PURE__*/ createUseReadContract({
    abi: goSwapShopRelayerAbi,
    functionName: 'wormholeFinality',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link goSwapShopRelayerAbi}__
 */
export const useWriteGoSwapShopRelayer = /*#__PURE__*/ createUseWriteContract({
  abi: goSwapShopRelayerAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link goSwapShopRelayerAbi}__ and `functionName` set to `"cancelTheOrder"`
 */
export const useWriteGoSwapShopRelayerCancelTheOrder =
  /*#__PURE__*/ createUseWriteContract({
    abi: goSwapShopRelayerAbi,
    functionName: 'cancelTheOrder',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link goSwapShopRelayerAbi}__ and `functionName` set to `"claimTheOrder"`
 */
export const useWriteGoSwapShopRelayerClaimTheOrder =
  /*#__PURE__*/ createUseWriteContract({
    abi: goSwapShopRelayerAbi,
    functionName: 'claimTheOrder',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link goSwapShopRelayerAbi}__ and `functionName` set to `"confirmTheOrder"`
 */
export const useWriteGoSwapShopRelayerConfirmTheOrder =
  /*#__PURE__*/ createUseWriteContract({
    abi: goSwapShopRelayerAbi,
    functionName: 'confirmTheOrder',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link goSwapShopRelayerAbi}__ and `functionName` set to `"createAnOrder"`
 */
export const useWriteGoSwapShopRelayerCreateAnOrder =
  /*#__PURE__*/ createUseWriteContract({
    abi: goSwapShopRelayerAbi,
    functionName: 'createAnOrder',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link goSwapShopRelayerAbi}__ and `functionName` set to `"placeAnOrder"`
 */
export const useWriteGoSwapShopRelayerPlaceAnOrder =
  /*#__PURE__*/ createUseWriteContract({
    abi: goSwapShopRelayerAbi,
    functionName: 'placeAnOrder',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link goSwapShopRelayerAbi}__ and `functionName` set to `"redeemTransferWithPayload"`
 */
export const useWriteGoSwapShopRelayerRedeemTransferWithPayload =
  /*#__PURE__*/ createUseWriteContract({
    abi: goSwapShopRelayerAbi,
    functionName: 'redeemTransferWithPayload',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link goSwapShopRelayerAbi}__ and `functionName` set to `"registerEmitter"`
 */
export const useWriteGoSwapShopRelayerRegisterEmitter =
  /*#__PURE__*/ createUseWriteContract({
    abi: goSwapShopRelayerAbi,
    functionName: 'registerEmitter',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link goSwapShopRelayerAbi}__ and `functionName` set to `"sendTokensWithPayload"`
 */
export const useWriteGoSwapShopRelayerSendTokensWithPayload =
  /*#__PURE__*/ createUseWriteContract({
    abi: goSwapShopRelayerAbi,
    functionName: 'sendTokensWithPayload',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link goSwapShopRelayerAbi}__ and `functionName` set to `"setSignatureVerifier"`
 */
export const useWriteGoSwapShopRelayerSetSignatureVerifier =
  /*#__PURE__*/ createUseWriteContract({
    abi: goSwapShopRelayerAbi,
    functionName: 'setSignatureVerifier',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link goSwapShopRelayerAbi}__ and `functionName` set to `"transferOwnerShip"`
 */
export const useWriteGoSwapShopRelayerTransferOwnerShip =
  /*#__PURE__*/ createUseWriteContract({
    abi: goSwapShopRelayerAbi,
    functionName: 'transferOwnerShip',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link goSwapShopRelayerAbi}__ and `functionName` set to `"updateRelayerFee"`
 */
export const useWriteGoSwapShopRelayerUpdateRelayerFee =
  /*#__PURE__*/ createUseWriteContract({
    abi: goSwapShopRelayerAbi,
    functionName: 'updateRelayerFee',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link goSwapShopRelayerAbi}__
 */
export const useSimulateGoSwapShopRelayer =
  /*#__PURE__*/ createUseSimulateContract({ abi: goSwapShopRelayerAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link goSwapShopRelayerAbi}__ and `functionName` set to `"cancelTheOrder"`
 */
export const useSimulateGoSwapShopRelayerCancelTheOrder =
  /*#__PURE__*/ createUseSimulateContract({
    abi: goSwapShopRelayerAbi,
    functionName: 'cancelTheOrder',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link goSwapShopRelayerAbi}__ and `functionName` set to `"claimTheOrder"`
 */
export const useSimulateGoSwapShopRelayerClaimTheOrder =
  /*#__PURE__*/ createUseSimulateContract({
    abi: goSwapShopRelayerAbi,
    functionName: 'claimTheOrder',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link goSwapShopRelayerAbi}__ and `functionName` set to `"confirmTheOrder"`
 */
export const useSimulateGoSwapShopRelayerConfirmTheOrder =
  /*#__PURE__*/ createUseSimulateContract({
    abi: goSwapShopRelayerAbi,
    functionName: 'confirmTheOrder',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link goSwapShopRelayerAbi}__ and `functionName` set to `"createAnOrder"`
 */
export const useSimulateGoSwapShopRelayerCreateAnOrder =
  /*#__PURE__*/ createUseSimulateContract({
    abi: goSwapShopRelayerAbi,
    functionName: 'createAnOrder',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link goSwapShopRelayerAbi}__ and `functionName` set to `"placeAnOrder"`
 */
export const useSimulateGoSwapShopRelayerPlaceAnOrder =
  /*#__PURE__*/ createUseSimulateContract({
    abi: goSwapShopRelayerAbi,
    functionName: 'placeAnOrder',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link goSwapShopRelayerAbi}__ and `functionName` set to `"redeemTransferWithPayload"`
 */
export const useSimulateGoSwapShopRelayerRedeemTransferWithPayload =
  /*#__PURE__*/ createUseSimulateContract({
    abi: goSwapShopRelayerAbi,
    functionName: 'redeemTransferWithPayload',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link goSwapShopRelayerAbi}__ and `functionName` set to `"registerEmitter"`
 */
export const useSimulateGoSwapShopRelayerRegisterEmitter =
  /*#__PURE__*/ createUseSimulateContract({
    abi: goSwapShopRelayerAbi,
    functionName: 'registerEmitter',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link goSwapShopRelayerAbi}__ and `functionName` set to `"sendTokensWithPayload"`
 */
export const useSimulateGoSwapShopRelayerSendTokensWithPayload =
  /*#__PURE__*/ createUseSimulateContract({
    abi: goSwapShopRelayerAbi,
    functionName: 'sendTokensWithPayload',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link goSwapShopRelayerAbi}__ and `functionName` set to `"setSignatureVerifier"`
 */
export const useSimulateGoSwapShopRelayerSetSignatureVerifier =
  /*#__PURE__*/ createUseSimulateContract({
    abi: goSwapShopRelayerAbi,
    functionName: 'setSignatureVerifier',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link goSwapShopRelayerAbi}__ and `functionName` set to `"transferOwnerShip"`
 */
export const useSimulateGoSwapShopRelayerTransferOwnerShip =
  /*#__PURE__*/ createUseSimulateContract({
    abi: goSwapShopRelayerAbi,
    functionName: 'transferOwnerShip',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link goSwapShopRelayerAbi}__ and `functionName` set to `"updateRelayerFee"`
 */
export const useSimulateGoSwapShopRelayerUpdateRelayerFee =
  /*#__PURE__*/ createUseSimulateContract({
    abi: goSwapShopRelayerAbi,
    functionName: 'updateRelayerFee',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link goSwapShopRelayerAbi}__
 */
export const useWatchGoSwapShopRelayerEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: goSwapShopRelayerAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link goSwapShopRelayerAbi}__ and `eventName` set to `"OrderCanceled"`
 */
export const useWatchGoSwapShopRelayerOrderCanceledEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: goSwapShopRelayerAbi,
    eventName: 'OrderCanceled',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link goSwapShopRelayerAbi}__ and `eventName` set to `"OrderClaimed"`
 */
export const useWatchGoSwapShopRelayerOrderClaimedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: goSwapShopRelayerAbi,
    eventName: 'OrderClaimed',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link goSwapShopRelayerAbi}__ and `eventName` set to `"OrderConfirmed"`
 */
export const useWatchGoSwapShopRelayerOrderConfirmedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: goSwapShopRelayerAbi,
    eventName: 'OrderConfirmed',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link goSwapShopRelayerAbi}__ and `eventName` set to `"OrderCreated"`
 */
export const useWatchGoSwapShopRelayerOrderCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: goSwapShopRelayerAbi,
    eventName: 'OrderCreated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link goSwapShopRelayerAbi}__ and `eventName` set to `"OrderPlaced"`
 */
export const useWatchGoSwapShopRelayerOrderPlacedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: goSwapShopRelayerAbi,
    eventName: 'OrderPlaced',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link goSwapShopRelayerAbi}__ and `eventName` set to `"OrderSent"`
 */
export const useWatchGoSwapShopRelayerOrderSentEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: goSwapShopRelayerAbi,
    eventName: 'OrderSent',
  })
