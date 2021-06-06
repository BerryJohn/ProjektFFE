export interface IWorkspaceData {
    id: string;
    name: string;
    icon: string;
    users?:number;
    lastUpdate?:string;
};

export const workspaceData:IWorkspaceData[] = [
    {
        id:'clientContract',
        name:'Client contract',
        icon:'contract.svg',
        users:153,
        lastUpdate:'2hours ago'
    },
    {
        id:'supplierContract',
        name:'Supplier contract',
        icon:'entities.svg',
        users:122,
        lastUpdate:'few minutes ago'
    },
    {
        id:'corporate',
        name:'Corporate',
        icon:'entities2.svg',
        users:54,
        lastUpdate:'21days ago'
    },
    {
        id:'groupNorms',
        name:'Group Norms',
        icon:'group.svg',
        users:62,
        lastUpdate:'above year ago'
    },
    {
        id:'realEstateContracts',
        name:'Real Estate contracts',
        icon:'mortgage.svg',
        users:1562,
        lastUpdate:'326days ago'
    },
    {
        id:'delivery',
        name:'Delivery',
        icon:'transportation.svg',
        users:566,
        lastUpdate:'16days ago'
    },
    {
        id:'networkingus',
        name:'Networking us',
        icon:'ecosystem.svg',
        users:64122,
        lastUpdate:'1day ago'
    },
    {
        id:'monitoring',
        name:'Monitoring',
        icon:'research.svg',
        users:4112,
        lastUpdate:'3days ago'
    },
    {
        id:'costEstimation',
        name:'Cost estimation',
        icon:'bar-chart.svg',
        users:311,
        lastUpdate:'7days ago'
    },
];

export default workspaceData;
