export const mixin = {

    created() {
        console.log("Je m’affiche avant");
      },
    

    en: {
        Accueil: "Home",
    },

    fr: {
        Accueil: "Accueil",    
    },
     

    filters :{
        translateTo: function (value, language) {

            if (language==='anglais'){
                let keys= Object.keys(mixin.en);        
                for(let i=0; i<keys.length; i++){
                    if (keys[i]===value){
                        return mixin.en[value]
                    }
                }  
            } 
            
            else if (language === 'francais'){
                let keys= Object.keys(mixin.fr);        
                for(let i=0; i<keys.length; i++){
                    if (keys[i]===value){
                        return mixin.fr[value]
                    }
                }    
            }
        },

    }
};