import IMapper from './IMapper';

// Model class that describes a pushpin on the map
export default interface IPushpin {
    pushpinNumber: number;
    title: string;
    subtitle: string;
    latitude: number;
    longitude: number;
}

// SharePoint list item details used in mapping
interface IListItem {
    fields: {
        Title: string;
        Subtitle: string;
        Pushpin: number;
        latitude: number;
        longitude: number;
    };
}

// Class to obtain the SharePoint field names (for select) and 
// to map SharePoint list items to model items
export class PushpinMapper implements IMapper {

    public getFieldNames(): string {
        return ('Title,Subtitle,Pushpin,latitude,longitude');
    }

    public getMappedValues(listItems: IListItem[]): IPushpin[] {

        var result = listItems.map(i => ({
            pushpinNumber: i.fields.Pushpin,
            title: i.fields.Title,
            subtitle: i.fields.Subtitle,
            latitude: i.fields.latitude,
            longitude: i.fields.longitude
        }));
        return result;
    }
}

