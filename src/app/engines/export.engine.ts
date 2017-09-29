import * as path from 'path';
import * as fs from 'fs-extra';
import * as Handlebars from 'handlebars';
import { logger } from '../../logger';
import { Configuration } from '../configuration';

const lunr: any = require('lunr'),
      cheerio: any = require('cheerio'),
      Entities:any = require('html-entities').AllHtmlEntities,
      $configuration = Configuration.getInstance(),
      Html = new Entities();

export class ExportEngine {
    documentsStore: Object = {};
    constructor() {}
    exportStructure(outputFolder, data) {
        return new Promise((resolve, reject) => {
            fs.outputFile(path.resolve(outputFolder + path.sep + '/json_structure.json'), JSON.stringify(data), function (err) {
                if(err) {
                    logger.error('Error during structure file generation ', err);
                    reject(err);
                } else {
                    resolve();
                    logger.info('JSON structure was exported into '+path.resolve(outputFolder + path.sep + '/json_structure.json'));				
                }
            });
        });
    }
};
