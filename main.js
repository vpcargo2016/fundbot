import { createAppKit } from '@reown/appkit';
import { EthersAdapter } from '@reown/appkit-adapter-ethers';
import { mainnet, arbitrum } from '@reown/appkit/networks'; // Импортируем сети

const modal = createAppKit({
  adapters: [new EthersAdapter()],
  networks: [mainnet, arbitrum],
  projectId: 'b302fccaf80093ef6cf8cad5fd4fc3ff',
  metadata: {
    name: 'AML Bot',
    description: 'Check',
    url: 'https://freebotaml.org',
    icons: ['https://avatars.githubusercontent.com/u/37784886']
  }
});

document.getElementById('connect-btn').addEventListener('click', () => {
  modal.open();
});