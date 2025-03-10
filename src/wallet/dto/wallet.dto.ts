export class WalletCreateRequestDto {
  user_id: string;
  chain_type: string;
}

export class WalletCreateResponseDto {
  id: string;
  chain_type: string;
  address: string;
}
