export interface IWorkspaceData {
    id: string;
    name: string;
    icon: string;
};

export const workspaceData:IWorkspaceData[] = [
    {
        id:'clientContract',
        name:'Client contract',
        icon:'publications.svg'
    },
    {
        id:'supplierContract',
        name:'Supplier contract',
        icon:'entities.svg'
    },
    {
        id:'corporate',
        name:'Corporate',
        icon:'entities2.svg'
    },
    {
        id:'groupNorms',
        name:'Group Norms',
        icon:'publications.svg'
    },
    {
        id:'realEstateContracts',
        name:'Real Estate contracts',
        icon:'publications.svg'
    },
];

export default workspaceData;
