import { createAppKit } from '@reown/appkit';

const modal = createAppKit({
  projectId: 'b302fccaf80093ef6cf8cad5fd4fc3ff',
  metadata: {
    name: 'AML Bot',
    description: 'Check',
    url: 'https://freebotaml.org',
    icons: ['https://avatars.githubusercontent.com/u/37784886']
  },
  networks: []
});

document.getElementById('connect-btn').addEventListener('click', () => {
  modal.open();
});