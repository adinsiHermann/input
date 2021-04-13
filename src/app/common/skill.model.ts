


/*name de type string en visibilité public
logo de type string en visibilité public
site de type string en visibilité public
On doit retrouver toutes les propriétés dans le constructeur de ta classe
*/

export class Skill {
public name : string;
public logo : string;
public site : string;


constructor(
    name : string,
    logo : string,
    site : string,
){
    this.name = name;
    this.logo = logo;
    this.site = site;
}
}