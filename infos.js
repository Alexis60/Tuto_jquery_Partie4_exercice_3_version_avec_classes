class texte {
   constructor(nom, prenom, mail, tel) {
       this.nom = nom;
       this.prenom = prenom;
       this.mail = mail;
       this.tel = tel;
   }

   verificationMail(string) {
       var pattern = new RegExp(/^[a-z0-9.​_-]+@[a-z0-9._​-]+\.[a-z]{2,10}$/i);
       return pattern.test(string);
   }
   verificationTexte(text) {
       var pattern = new RegExp(/^[A-Z -]+$/i);
       return pattern.test(text);
   }
   verificationTel(phone) {
       var pattern = new RegExp(/^0[1-9]\d{8}$/);
       return pattern.test(phone);
   }
}