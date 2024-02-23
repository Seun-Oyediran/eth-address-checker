function isValidEthereumAddress(address) {
  if (!address) return false;
  const ethAddressPattern = /^0x[a-fA-F0-9]{40}$/;

  return ethAddressPattern.test(address);
}

module.exports = isValidEthereumAddress;
