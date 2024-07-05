import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeAllContacts = async () => {
    try {
        const deletedData = [];
        await fs.writeFile(PATH_DB, JSON.stringify(deletedData, null, 2), 'utf8');

    } catch (error) {
         console.error(error);
    }
};

removeAllContacts();
