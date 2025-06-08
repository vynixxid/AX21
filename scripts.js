const tokenData = [
  {
    name: "AX21 Token",
    contract: "0x123456789abcdef",
    price: 0.045,
    volume24h: 1200000,
    marketCap: 30000000,
    totalSupply: 1000000000,
    holders: 15000,
    launchDate: "2025-01-01",
    rating: "Legit",
    buyLink: "https://pancakeswap.finance/swap?outputCurrency=0x123456789abcdef"
  },
  {
    name: "FutureCoin",
    contract: "0xabcdef123456789",
    price: 1.23,
    volume24h: 4500000,
    marketCap: 100000000,
    totalSupply: 500000000,
    holders: 32000,
    launchDate: "2024-12-15",
    rating: "Legit",
    buyLink: "https://pancakeswap.finance/swap?outputCurrency=0xabcdef123456789"
  }
];

function formatNumber(num) {
  if (num >= 1e9) return (num / 1e9).toFixed(2) + "B";
  if (num >= 1e6) return (num / 1e6).toFixed(2) + "M";
  if (num >= 1e3) return (num / 1e3).toFixed(2) + "K";
  return num;
}

function renderTokens() {
  const container = document.getElementById('token-list');
  container.innerHTML = '';
  tokenData.forEach(token => {
    const card = document.createElement('div');
    card.className = 'token-card';
    card.innerHTML = `
      <div class="token-name">${token.name}</div>
      <div>Contract: ${token.contract}</div>
      <div class="token-price">Price: $${token.price}</div>
      <div class="token-volume">24h Volume: $${formatNumber(token.volume24h)}</div>
      <div class="token-marketcap">Market Cap: $${formatNumber(token.marketCap)}</div>
      <div class="token-supply">Total Supply: ${formatNumber(token.totalSupply)}</div>
      <div>Holders: ${token.holders}</div>
      <div>Launch Date: ${token.launchDate}</div>
      <div>Rating: ${token.rating}</div>
      <div><a href="${token.buyLink}" target="_blank" style="color:#00ffcc;">Buy Now</a></div>
    `;
    container.appendChild(card);
  });
}

// Auto-refresh every 5 mins (simulate live data update)
setInterval(() => {
  // Here you can add real API fetch
  renderTokens();
}, 300000);

window.onload = () => {
  renderTokens();
};
