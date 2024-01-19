import {
  AlignmentType,
  Document,
  HeadingLevel,
  Packer,
  Paragraph,
  TextRun
} from "docx";

const PHONE_NUMBER = "numero";
const PROFILE_URL = "social";
const EMAIL = "email";

export class DocumentCreator {

  public create(
    includeSezione1: boolean,
    includeSezione2: boolean,
    includeSezione3: boolean,
    includeSezione4: boolean,
    includeSezione5: boolean,
    includeSezione6: boolean,
    includeSezione7: boolean,
    includeSezione8: boolean,
    includiName1: boolean,
    includiName2: boolean,
    includiName3: boolean,
    includiName4: boolean,
    includiName5: boolean,
    includiName6: boolean,
    includiName7: boolean,
    includiName8: boolean,
    includiName9: boolean,
    includiName10: boolean,
    includiName11: boolean,
    includiName12: boolean,
    includiName13: boolean,
    includiName14: boolean,
    includiName15: boolean,
    includiName16: boolean,
    includiName17: boolean,
    includiName18: boolean,
    includiName19: boolean,
    includiName20: boolean,
    includiName21: boolean,
    includiName22: boolean,
    includiName23: boolean,
    includiName24: boolean,
    includiObject1: boolean,
    includiObject2: boolean,
    includiObject3: boolean,
    object1: any[],
    object2: any[],
    object3: any[],
    name1: any[],
    name2: any[],
    name3: any[],
    name4: any[],
    name5: any[],
    name6: any[],
    name7: any[],
    name8: any[],
    name9: any[],
    name10: any[],
    name11: any[],
    name12: any[],
    name13: any[],
    name14: any[],
    name15: any[],
    name16: any[],
    name17: any[],
    name18: any[],
    name19: any[],
    name20: any[],
    name21: any[],
    name22: any[],
    name23: any[],
    name24: any[],
    sezione1: any[],
    sezione2: any[],
    sezione3: any[],
    sezione4: any[],
    sezione5: any[],
    sezione6: any[],
    sezione7: any[],
    sezione8: any[],
  ): Document {
    const document = new Document({
      sections: [
        {
          children: [
            new Paragraph({
              text: "Template offerte",
              heading: HeadingLevel.TITLE
            }),
            this.createContactInfo(PHONE_NUMBER, PROFILE_URL, EMAIL),

            // sezione1
            ...(includeSezione1 ? [
              this.createHeading("Sezione1"),
              ...sezione1
                .map(position => {
                  const arr: Paragraph[] = [];

                  arr.push(new Paragraph(`Aggiunta1: ${position.id}`)); //Esempio di come poter inserire cose da json
                  arr.push(new Paragraph(`Aggiunta2: ${position.title}`)); //Esempio di come poter inserire cose da json
                  arr.push(new Paragraph(`Aggiunta2: ${position.contenutoCompleto}`)); //Esempio di come poter inserire cose da json
                  arr.push(new Paragraph({
                    children: [
                      new TextRun({
                        text: `Aggiunta2: `,
                        color: "FF0000", // Codice colore rosso (hex) 
                        size: 124,  //aggiunta al testo
                      }),
                      new TextRun(position.contenutoCompleto),
                    ]
                  }));
                 
                  return arr;
                })
                .reduce((prev, curr) => prev.concat(curr), []),
                /*
                new Paragraph(
                  "Dr. Dean Mohamedally Director of Postgraduate Studies Department of Computer Science, University College London Malet Place, Bloomsbury, London WC1E d.mohamedally@ucl.ac.uk"
                ), */
              ] : []),

            // sezione2
            ...(includeSezione2 ? [
              this.createHeading("Sezione2"),
              ...sezione2
                .map(position => {
                  const arr: Paragraph[] = [];

                  arr.push(new Paragraph(`Aggiunta1: ${position.id}`)); //Esempio di come poter inserire cose da json
                  arr.push(new Paragraph(`Aggiunta2: ${position.title}`)); //Esempio di come poter inserire cose da json
                  arr.push(new Paragraph(`Aggiunta2: ${position.contenutoCompleto}`)); //Esempio di come poter inserire cose da json

                  return arr;
                })
                .reduce((prev, curr) => prev.concat(curr), []),
              ] : []),

            // sezione3
            ...(includeSezione3 ? [
              this.createHeading("Sezione3"),
              ...sezione3
                .map(position => {
                  const arr: Paragraph[] = [];

                  arr.push(new Paragraph(`Aggiunta1: ${position.id}`)); //Esempio di come poter inserire cose da json
                  arr.push(new Paragraph(`Aggiunta2: ${position.title}`)); //Esempio di come poter inserire cose da json
                  arr.push(new Paragraph(`Aggiunta2: ${position.contenutoCompleto}`)); //Esempio di come poter inserire cose da json

                  return arr;
                })
                .reduce((prev, curr) => prev.concat(curr), []),
              ] : []),

            // sezione4
            ...(includeSezione4 ? [
              this.createHeading("Sezione4"),
              ...sezione4
                .map(position => {
                  const arr: Paragraph[] = [];

                  arr.push(new Paragraph(`Aggiunta1: ${position.id}`)); //Esempio di come poter inserire cose da json
                  arr.push(new Paragraph(`Aggiunta2: ${position.title}`)); //Esempio di come poter inserire cose da json
                  arr.push(new Paragraph(`Aggiunta2: ${position.contenutoCompleto}`)); //Esempio di come poter inserire cose da json

                  return arr;
                })
                .reduce((prev, curr) => prev.concat(curr), []),
              ] : []),

             // sezione5
             ...(includeSezione5 ? [
              this.createHeading("Sezione5"),
              ...sezione5 
                .map(position => {
                  const arr: Paragraph[] = [];

                  arr.push(new Paragraph(`Aggiunta1: ${position.id}`)); //Esempio di come poter inserire cose da json
                  arr.push(new Paragraph(`Aggiunta2: ${position.title}`)); //Esempio di come poter inserire cose da json
                  arr.push(new Paragraph(`Aggiunta2: ${position.contenutoCompleto}`)); //Esempio di come poter inserire cose da json

                  return arr;
                })
                .reduce((prev, curr) => prev.concat(curr), []),
              ] : []),

             // sezione6
             ...(includeSezione6 ? [
              this.createHeading("Sezione6"),
              ...sezione6
                .map(position => {
                  const arr: Paragraph[] = [];

                  arr.push(new Paragraph(`Aggiunta1: ${position.id}`)); //Esempio di come poter inserire cose da json
                  arr.push(new Paragraph(`Aggiunta2: ${position.title}`)); //Esempio di come poter inserire cose da json
                  arr.push(new Paragraph(`Aggiunta2: ${position.contenutoCompleto}`)); //Esempio di come poter inserire cose da json

                  return arr;
                })
                .reduce((prev, curr) => prev.concat(curr), []),
              ] : []),

             // sezione7
             ...(includeSezione7 ? [
              this.createHeading("Sezione7"),
              ...sezione7
                .map(position => {
                  const arr: Paragraph[] = [];

                  arr.push(new Paragraph(`Aggiunta1: ${position.id}`)); //Esempio di come poter inserire cose da json
                  arr.push(new Paragraph(`Aggiunta2: ${position.title}`)); //Esempio di come poter inserire cose da json
                  arr.push(new Paragraph(`Aggiunta2: ${position.contenutoCompleto}`)); //Esempio di come poter inserire cose da json

                  return arr;
                })
                .reduce((prev, curr) => prev.concat(curr), []),
              ] : []),

             // sezione8
             ...(includeSezione8 ? [
              this.createHeading("Sezione8"),
              ...sezione8
                .map(position => {
                  const arr: Paragraph[] = [];

                  arr.push(new Paragraph(`Aggiunta1: ${position.id}`)); //Esempio di come poter inserire cose da json
                  arr.push(new Paragraph(`Aggiunta2: ${position.title}`)); //Esempio di come poter inserire cose da json
                  arr.push(new Paragraph(`Aggiunta2: ${position.contenutoCompleto}`)); //Esempio di come poter inserire cose da json

                  return arr;
                })
                .reduce((prev, curr) => prev.concat(curr), []),
            ] : []),

            //sezione Name1
            ...(includiName1? [
              this.createHeading("Name1"),
              ...name1
                .map(position => {
                  const arr: Paragraph[] = [];

                 
                  arr.push(new Paragraph(`Aggiunta2: ${position.contenuto}`)); //Esempio di come poter inserire cose da json
                  arr.push(new Paragraph(position.contenuto2));
 
                  return arr;
                })
                .reduce((prev, curr) => prev.concat(curr), []),
            ] : []),

            //sezione Name2
            ...(includiName2? [
              this.createHeading("Name2"),
              ...name2
                .map(position => {
                  const arr: Paragraph[] = [];

                  arr.push(new Paragraph(`Aggiunta2: ${position.contenuto}`)); //Esempio di come poter inserire cose da json

                  return arr;
                })
                .reduce((prev, curr) => prev.concat(curr), []),
            ] : []),

            //sezione Name3
            ...(includiName3? [
              this.createHeading("Name3"),
              ...name3
                .map(position => {
                  const arr: Paragraph[] = [];

                  arr.push(new Paragraph(`Aggiunta2: ${position.contenuto}`)); //Esempio di come poter inserire cose da json

                  return arr;
                })
                .reduce((prev, curr) => prev.concat(curr), []),
            ] : []),

             //sezione Name4
             ...(includiName4? [
              this.createHeading("Name4"),
              ...name4
                .map(position => {
                  const arr: Paragraph[] = [];

                  arr.push(new Paragraph(`Aggiunta2: ${position.contenuto}`)); //Esempio di come poter inserire cose da json

                  return arr;
                })
                .reduce((prev, curr) => prev.concat(curr), []),
            ] : []),

             //sezione Name5
             ...(includiName5? [
              this.createHeading("Name5"),
              ...name5
                .map(position => {
                  const arr: Paragraph[] = [];

                  arr.push(new Paragraph(`Aggiunta2: ${position.contenuto}`)); //Esempio di come poter inserire cose da json

                  return arr;
                })
                .reduce((prev, curr) => prev.concat(curr), []),
            ] : []),

             //sezione Name6
             ...(includiName6? [
              this.createHeading("Name6"),
              ...name6
                .map(position => {
                  const arr: Paragraph[] = [];

                  arr.push(new Paragraph(`Aggiunta2: ${position.contenuto}`)); //Esempio di come poter inserire cose da json

                  return arr;
                })
                .reduce((prev, curr) => prev.concat(curr), []),
            ] : []),

            //sezione Name7
            ...(includiName7? [
              this.createHeading("Name7"),
              ...name7
                .map(position => {
                  const arr: Paragraph[] = [];

                  arr.push(new Paragraph(`Aggiunta2: ${position.contenuto}`)); //Esempio di come poter inserire cose da json

                  return arr;
                })
                .reduce((prev, curr) => prev.concat(curr), []),
            ] : []),

              //sezione Name8
              ...(includiName8? [
                this.createHeading("Name8"),
                ...name8
                  .map(position => {
                    const arr: Paragraph[] = [];
  
                    arr.push(new Paragraph(`Aggiunta2: ${position.contenuto}`)); //Esempio di come poter inserire cose da json
  
                    return arr;
                  })
                  .reduce((prev, curr) => prev.concat(curr), []),
              ] : []),

                //sezione Name9
            ...(includiName9? [
              this.createHeading("Name9"),
              ...name9
                .map(position => {
                  const arr: Paragraph[] = [];

                  arr.push(new Paragraph(`Aggiunta2: ${position.contenuto}`)); //Esempio di come poter inserire cose da json

                  return arr;
                })
                .reduce((prev, curr) => prev.concat(curr), []),
            ] : []),

              //sezione Name10
              ...(includiName10? [
                this.createHeading("Name10"),
                ...name10
                  .map(position => {
                    const arr: Paragraph[] = [];
  
                    arr.push(new Paragraph(`Aggiunta2: ${position.contenuto}`)); //Esempio di come poter inserire cose da json
  
                    return arr;
                  })
                  .reduce((prev, curr) => prev.concat(curr), []),
              ] : []),

                //sezione Name11
            ...(includiName11? [
              this.createHeading("Name11"),
              ...name11
                .map(position => {
                  const arr: Paragraph[] = [];

                  arr.push(new Paragraph(`Aggiunta2: ${position.contenuto}`)); //Esempio di come poter inserire cose da json

                  return arr;
                })
                .reduce((prev, curr) => prev.concat(curr), []),
            ] : []),

              //sezione Name12
              ...(includiName12? [
                this.createHeading("Name12"),
                ...name12
                  .map(position => {
                    const arr: Paragraph[] = [];
  
                    arr.push(new Paragraph(`Aggiunta2: ${position.contenuto}`)); //Esempio di come poter inserire cose da json
  
                    return arr;
                  })
                  .reduce((prev, curr) => prev.concat(curr), []),
              ] : []),

                //sezione Name13
            ...(includiName13? [
              this.createHeading("Name13"),
              ...name13
                .map(position => {
                  const arr: Paragraph[] = [];

                  arr.push(new Paragraph(`Aggiunta2: ${position.contenuto}`)); //Esempio di come poter inserire cose da json

                  return arr;
                })
                .reduce((prev, curr) => prev.concat(curr), []),
            ] : []),

              //sezione Name14
              ...(includiName14? [
                this.createHeading("Name14"),
                ...name14
                  .map(position => {
                    const arr: Paragraph[] = [];
  
                    arr.push(new Paragraph(`Aggiunta2: ${position.contenuto}`)); //Esempio di come poter inserire cose da json
  
                    return arr;
                  })
                  .reduce((prev, curr) => prev.concat(curr), []),
              ] : []),

                //sezione Name15
            ...(includiName15? [
              this.createHeading("Name15"),
              ...name15
                .map(position => {
                  const arr: Paragraph[] = [];

                  arr.push(new Paragraph(`Aggiunta2: ${position.contenuto}`)); //Esempio di come poter inserire cose da json

                  return arr;
                })
                .reduce((prev, curr) => prev.concat(curr), []),
            ] : []),

              //sezione Name16
              ...(includiName16? [
                this.createHeading("Name16"),
                ...name16
                  .map(position => {
                    const arr: Paragraph[] = [];
  
                    arr.push(new Paragraph(`Aggiunta2: ${position.contenuto}`)); //Esempio di come poter inserire cose da json
  
                    return arr;
                  })
                  .reduce((prev, curr) => prev.concat(curr), []),
              ] : []),

                //sezione Name17
            ...(includiName17? [
              this.createHeading("Name17"),
              ...name17
                .map(position => {
                  const arr: Paragraph[] = [];

                  arr.push(new Paragraph(`Aggiunta2: ${position.contenuto}`)); //Esempio di come poter inserire cose da json

                  return arr;
                })
                .reduce((prev, curr) => prev.concat(curr), []),
            ] : []),

              //sezione Name18
              ...(includiName18? [
                this.createHeading("Name18"),
                ...name18
                  .map(position => {
                    const arr: Paragraph[] = [];
  
                    arr.push(new Paragraph(`Aggiunta2: ${position.contenuto}`)); //Esempio di come poter inserire cose da json
  
                    return arr;
                  })
                  .reduce((prev, curr) => prev.concat(curr), []),
              ] : []),

                //sezione Name19
            ...(includiName19? [
              this.createHeading("Name19"),
              ...name19
                .map(position => {
                  const arr: Paragraph[] = [];

                  arr.push(new Paragraph(`Aggiunta2: ${position.contenuto}`)); //Esempio di come poter inserire cose da json

                  return arr;
                })
                .reduce((prev, curr) => prev.concat(curr), []),
            ] : []),

              //sezione Name20
              ...(includiName20? [
                this.createHeading("Name20"),
                ...name20
                  .map(position => {
                    const arr: Paragraph[] = [];
  
                    arr.push(new Paragraph(`Aggiunta2: ${position.contenuto}`)); //Esempio di come poter inserire cose da json
  
                    return arr;
                  })
                  .reduce((prev, curr) => prev.concat(curr), []),
              ] : []),

                //sezione Name21
            ...(includiName21? [
              this.createHeading("Name21"),
              ...name21
                .map(position => {
                  const arr: Paragraph[] = [];

                  arr.push(new Paragraph(`Aggiunta2: ${position.contenuto}`)); //Esempio di come poter inserire cose da json

                  return arr;
                })
                .reduce((prev, curr) => prev.concat(curr), []),
            ] : []),

              //sezione Name22
              ...(includiName22? [
                this.createHeading("Name22"),
                ...name22
                  .map(position => {
                    const arr: Paragraph[] = [];
  
                    arr.push(new Paragraph(`Aggiunta2: ${position.contenuto}`)); //Esempio di come poter inserire cose da json
  
                    return arr;
                  })
                  .reduce((prev, curr) => prev.concat(curr), []),
              ] : []),

                //sezione Name23
            ...(includiName23? [
              this.createHeading("Name23"),
              ...name23
                .map(position => {
                  const arr: Paragraph[] = [];

                  arr.push(new Paragraph(`Aggiunta2: ${position.contenuto}`)); //Esempio di come poter inserire cose da json

                  return arr;
                })
                .reduce((prev, curr) => prev.concat(curr), []),
            ] : []),

              //sezione Name24
              ...(includiName24? [
                this.createHeading("Name24"),
                ...name24
                  .map(position => {
                    const arr: Paragraph[] = [];
  
                    arr.push(new Paragraph(`Aggiunta2: ${position.contenuto}`)); //Esempio di come poter inserire cose da json
  
                    return arr;
                  })
                  .reduce((prev, curr) => prev.concat(curr), []),
              ] : []),

            //sezione object1
            ...(includiObject1? [
              this.createHeading("Object1"),
              ...object1
                .map(position => {
                  const arr: Paragraph[] = [];

                  arr.push(new Paragraph(`Aggiunta2: ${position.contenuto}`)); //Esempio di come poter inserire cose da json

                  return arr;
                })
                .reduce((prev, curr) => prev.concat(curr), []),
            ] : []),

            //sezione object2
            ...(includiObject2? [
              this.createHeading("Object2"),
              ...object2
                .map(position => {
                  const arr: Paragraph[] = [];

                  arr.push(new Paragraph(`Aggiunta2: ${position.contenuto}`)); //Esempio di come poter inserire cose da json

                  return arr;
                })
                .reduce((prev, curr) => prev.concat(curr), []),
            ] : []),

            //sezione object3
            ...(includiObject3? [
              this.createHeading("Object3"),
              ...object3
                .map(position => {
                  const arr: Paragraph[] = [];

                  arr.push(new Paragraph(`Aggiunta2: ${position.contenuto}`)); //Esempio di come poter inserire cose da json

                  return arr;
                })
                .reduce((prev, curr) => prev.concat(curr), []),
            ] : []),

            //ulteriori logiche

            new Paragraph("Maggiori info qui"),
            new Paragraph({
              text:
                "Qui si trovano tutte le sezioni",
              alignment: AlignmentType.CENTER
            })
          ]
        }
      ]
    });

    return document;
  }

  // extra

  public createContactInfo(
    phoneNumber: string,
    profileUrl: string,
    email: string,
  ): Paragraph {
    return new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [
        new TextRun(
          `Mobile: ${phoneNumber} | LinkedIn: ${profileUrl} | Email: ${email}`
        ),
        new TextRun({
          text: "Address: ",
          break: 1
        })
      ]
    });
  }

  public createHeading(text: string): Paragraph {
    return new Paragraph({
      text: text,
      heading: HeadingLevel.HEADING_1,
      thematicBreak: true,
      
    });
  }

  
}





/*
style: "Heading1",  // Aggiungi uno stile specifico al titolo 
children: [
  new TextRun({
    text: text,
    color: "000000",  // Codice colore nero (hex)
  })
]
});
*/

/*
 arr.push(new Paragraph({
                    children: [
                      new TextRun({
                        text: `Aggiunta2: `,
                        color: "FF0000", // Codice colore rosso (hex) 
                        size: 24,  //aggiunta al testo
                      }),
                      new TextRun(position.contenutoCompleto),
                    ]
                  }));

*/ 