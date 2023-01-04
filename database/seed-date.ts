interface SeedData {
    entries:SeedEntry[]; 
}

interface SeedEntry {
description:string,
status:string,
createdAt:number,
}

export const seedData:SeedData = {
    entries: [
        {
            description:'Un texto es una composición de signos codificados en un sistema de escritura que forma una unidad de sentido.',
            status:'pending',
            createdAt: Date.now(),
        },
        {
            description:' Un texto es una composición de signos codificados en un sistema de escritura que forma una unidad de sentido.',
            status:'in-progress',
            createdAt: Date.now() -1000000,
        },
        {
            description:'Un texto es una composición de signos codificados en un sistema de escritura que forma una unidad de sentido.',
            status:'finished',
            createdAt: Date.now() - 100000,
        },
    ]
}




