interface IRailWay{
        id: number;
        carLoadNumber: number;
        numberInvoice: string;
        dateExtractInvoice: Date;
        owner: string;
        furnisher: string;
        sender: string;
        stationSender: string;
        numberOfTheContract: number;
        destinationStorage: string;
        nameCulture: string;
        classCulture: string;
        sortCulture: string;
        weightBrruto: number;
        weightTare: number;
        weightNet: number;
        meansWeight: string;
        gmo: boolean;
        certificatedate: Date;
        saveprotocol: string;  
        bruttotime: Date; 
        correspondesetime: Date;
        brutotime: Date;
        brutoIZT: number;
        netIZT: number;
        tareIZT: number;
        brutodifference: number;
        netdifference: number;
        delayreason: string;
        permisionresult: boolean;
        permisiontime: Date;
        permisionname: string;
        overtime: Date;
        remark: string;
}

export class RailWay implements IRailWay{
        id: number;
        carLoadNumber: number;
        numberInvoice: string;
        dateExtractInvoice: Date;
        owner: string;
        furnisher: string;
        sender: string;
        stationSender: string;
        numberOfTheContract: number;
        destinationStorage: string;
        nameCulture: string;
        classCulture: string;
        sortCulture: string;
        weightBrruto: number;
        weightTare: number;
        weightNet: number;
        meansWeight: string;
        gmo: boolean;
        certificatedate: Date;
        saveprotocol: string;  
        bruttotime: Date; 
        correspondesetime: Date;
        brutotime: Date;
        brutoIZT: number;
        netIZT: number;
        tareIZT: number;
        brutodifference: number;
        netdifference: number;
        delayreason: string;
        permisionresult: boolean;
        permisiontime: Date;
        permisionname: string;
        overtime: Date;
        remark: string;
}