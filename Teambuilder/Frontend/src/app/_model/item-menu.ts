export class MenuItem {
    id: number;
    title: string;
    route: string;
    icon: string;
}

export const MENUITEMS: MenuItem[] = [
    {id:1, title:'Login', route:'login', icon:''},
    {id:2, title:'Register', route:'register', icon:''},
];