export class ContactItem {
    selector: number;
    type: string;
    name: string;
    icon: string;
}

export const CONTACTITEMS: ContactItem[] = [
    {selector:1, type:'Twitter', name:'@SushisManiacsTwitter', icon:'error_outline'},
    {selector:1, type:'Instagram', name:'@SushisManiacsInsta', icon:'error_outline'},
    {selector:1, type:'Facebook', name:'@SuchisManiacsFacebook', icon:'error_outline'},
    {selector:2, type:'mail', name:'sushis.maniacs@mail.fr', icon:'mail'},
    {selector:2, type:'phone', name:'0563586289', icon:'phone_enabled'},
];