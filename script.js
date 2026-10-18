const inputField = document.getElementById('command-input');
const outputArea = document.getElementById('output-area');
const terminalBody = document.getElementById('terminal-body');

terminalBody.addEventListener('click', () => { inputField.focus(); });

inputField.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        let command = inputField.value.trim().toLowerCase();
        let commandLine = document.createElement('div');
        commandLine.innerHTML = `<span style="color: #38ef7d;">visitor@ubuntu:~$</span> ${inputField.value}`;
        outputArea.appendChild(commandLine);
        processCommand(command);
        inputField.value = '';
        terminalBody.scrollTop = terminalBody.scrollHeight;
    }
});

function processCommand(cmd) {
    let response = '';
    switch(cmd) {
        case 'help':
            response = `Perintah tersedia: whoami, experience, skills, projects, education, cert, contact, clear`;
            break;
        case 'whoami':
        case 'about':
            response = `Nama: Muhammad Firdaus | IT Infrastructure & Support Specialist (IPK 3.44/4.00 Universitas Gunadarma)[cite: 3].`;
            break;
        case 'experience':
            response = `1. PT. Lizzie Parra Kreasi (IT Support): Mikrotik, Load Balancer, Synology NAS, OpenVPN, CCTV[cite: 3].\n2. PT. Integrasindo Mitra Sejati (IT Infra): Windows Server Active Directory, ESXi, TrueNAS, Cisco, Ruijie[cite: 3].\n3. PT. Kimia Farma Tbk (Magang IT Helpdesk)[cite: 3].\n4. PT. PII (Magang IT Support HRIS).`;
            break;
        case 'skills':
            response = `Hard Skills: Windows/Linux Server, Active Directory, DNS, DHCP, Cisco, Ruijie, MikroTik, VMware, Synology NAS[cite: 3].`;
            break;
        case 'projects':
            response = `1. Sistem Monitoring Hama Cabai (IoT)[cite: 3].\n2. Sistem Pendeteksi Kebakaran Gedung (IoT)[cite: 3].`;
            break;
        case 'education':
            response = `S1 Sistem Komputer Universitas Gunadarma (2019-2023) | Asisten Lab Robotik[cite: 3].`;
            break;
        case 'cert':
            response = `Ruijie Specialist Engineer (2025)[cite: 1, 3] -> https://drive.google.com/file/d/1dYTd7CZO6BTaESDkZFMnYfPqFJTh0v7C/view?usp=sharing`;
            break;
        case 'contact':
            response = `Email: mhmmdfirdaus315@gmail.com[cite: 3] | LinkedIn: muhammad-firdaus-92a751217[cite: 3] | GitHub: frdaus/mini-project[cite: 3]`;
            break;
        case 'clear':
            outputArea.innerHTML = '';
            return;
        case '':
            response = '';
            break;
        default:
            response = `Perintah tidak dikenal: "${cmd}". Ketik "help".`;
    }
    let responseDiv = document.createElement('div');
    responseDiv.className = 'command-output';
    responseDiv.innerHTML = response;
    outputArea.appendChild(responseDiv);
}