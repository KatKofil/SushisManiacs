import { Controller, Get } from '@nestjs/common';
import { Contact } from '../contact.entity';
import { ContactsService } from '../contacts.service';
import { Post,Put, Delete, Body, Param } from  '@nestjs/common';

@Controller('contacts')
export class ContactsController {
    constructor(private contactsService: ContactsService){}
    
    @Get()
    index(): Promise<Contact[]> {
        return this.contactsService.findAll();
    }

    @Post('users/register')
    async create(@Body() contactData: Contact): Promise<any> {
        return this.contactsService.create(contactData);
    }  

    @Put(':idUser/update')
    async update(@Param('idUser') id, @Body() contactData: Contact): Promise<any> {
        contactData.idUser = Number(id);
        console.log('Update #' + contactData.idUser)
        return this.contactsService.update(contactData);
    } 

    @Delete(':idUser/delete')
    async delete(@Param('idUser') idUser): Promise<any> {
      return this.contactsService.delete(idUser);
    }  

}
