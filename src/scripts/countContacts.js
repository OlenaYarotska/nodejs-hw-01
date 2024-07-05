import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';


export const countContacts = async () => {
     try {
        const data = await fs.readFile(PATH_DB, 'utf8');
         const parsedData = JSON.parse(data);
         return parsedData.length;
    } catch (error) {
         console.error(error);
         return 0;
    }
};

console.log(await countContacts());
