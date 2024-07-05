import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const getAllContacts = async () => {
     try {
        const data = await fs.readFile(PATH_DB, 'utf8');
        const parsedData = JSON.parse(data);
        return parsedData;
    } catch (error) {
         console.error(error);
         return [];
    }
};


console.log(await getAllContacts());
