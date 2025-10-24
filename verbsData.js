const VERB_DATA = {
  "Populares": {
    "tener": {
      ru: "иметь",
      reflexive: false,
      tenses: {
        presente: {
          normal: {
            forms: ["tengo", "tienes", "tiene", "tenemos", "tenéis", "tienen"],
            examples: [
              ["Tengo una casa grande.", "У меня большой дом."],
              ["Tienes muchos amigos.", "У тебя много друзей."],
              ["Tiene un coche nuevo.", "У него новая машина."],
              ["Tenemos tiempo libre hoy.", "У нас сегодня есть свободное время."],
              ["Tenéis suerte.", "Вам везёт."],
              ["Tienen una familia unida.", "У них дружная семья."]
            ]
          }
        },
        pasado: {
          normal: {
            forms: ["tuve", "tuviste", "tuvo", "tuvimos", "tuvisteis", "tuvieron"],
            examples: [
              ["Tuve un día ocupado.", "У меня был занятой день."],
              ["Tuviste una idea brillante.", "У тебя была блестящая идея."],
              ["Tuvimos una reunión importante.", "У нас была важная встреча."],
              ["Tuvieron una fiesta ayer.", "У них вчера была вечеринка."]
            ]
          }
        },
        futuro: {
          normal: {
            forms: ["tendré", "tendrás", "tendrá", "tendremos", "tendréis", "tendrán"],
            examples: [
              ["Tendré vacaciones pronto.", "Скоро у меня будут каникулы."],
              ["Tendrán un bebé en mayo.", "У них будет ребёнок в мае."]
            ]
          }
        }
      }
    },

    "decir": {
      ru: "говорить",
      reflexive: true,
      tenses: {
        presente: {
          normal: {
            forms: ["digo","dices","dice","decimos","decís","dicen"],
            examples: [
              ["Digo la verdad siempre.", "Я всегда говорю правду."],
              ["Dicen cosas interesantes.", "Они говорят интересные вещи."]
            ]
          },
          reflex: {
            forms: ["me digo","te dices","se dice","nos decimos","os decís","se dicen"],
            examples: [
              ["Me digo que puedo hacerlo.", "Я говорю себе, что смогу это сделать."],
              ["Se dicen que todo saldrá bien.", "Они говорят себе, что всё будет хорошо."]
            ]
          }
        },
        pasado: {
          normal: {
            forms: ["dije","dijiste","dijo","dijimos","dijisteis","dijeron"],
            examples: [
              ["Dije la verdad ayer.", "Я сказал правду вчера."],
              ["Dijeron todo claramente.", "Они всё сказали ясно."]
            ]
          },
          reflex: {
            forms: ["me dije","te dijiste","se dijo","nos dijimos","os dijisteis","se dijeron"],
            examples: [
              ["Me dije que no volvería.", "Я сказал себе, что не вернусь."],
              ["Nos dijimos adiós en silencio.", "Мы попрощались молча."]
            ]
          }
        },
        futuro: {
          normal: {
            forms: ["diré","dirás","dirá","diremos","diréis","dirán"],
            examples: [
              ["Diré la verdad mañana.", "Я скажу правду завтра."],
              ["Dirán todo cuando llegue el momento.", "Они всё скажут, когда придёт время."]
            ]
          },
          reflex: {
            forms: ["me diré","te dirás","se dirá","nos diremos","os diréis","se dirán"],
            examples: [
              ["Me diré que fue una buena decisión.", "Я скажу себе, что это было хорошее решение."],
              ["Se dirán la verdad algún día.", "Они скажут себе правду когда-нибудь."]
            ]
          }
        }
      }
    }
  },

  "En casa": {
    "lavar": {
      ru: "мыть",
      reflexive: true,
      tenses: {
        presente: {
          normal: {
            forms: ["lavo","lavas","lava","lavamos","laváis","lavan"],
            examples: [
              ["Lavo los platos después de comer.", "Я мою посуду после еды."],
              ["Lavamos la ropa los sábados.", "Мы стираем одежду по субботам."]
            ]
          },
          reflex: {
            forms: ["me lavo","te lavas","se lava","nos lavamos","os laváis","se lavan"],
            examples: [
              ["Me lavo la cara cada mañana.", "Я умываюсь каждое утро."],
              ["Nos lavamos las manos antes de comer.", "Мы моем руки перед едой."]
            ]
          }
        },
        pasado: {
          normal: {
            forms: ["lavé","lavaste","lavó","lavamos","lavasteis","lavaron"],
            examples: [
              ["Lavé el suelo ayer.", "Я помыл пол вчера."],
              ["Lavaron los vasos después de la fiesta.", "Они вымыли стаканы после вечеринки."]
            ]
          },
          reflex: {
            forms: ["me lavé","te lavaste","se lavó","nos lavamos","os lavasteis","se lavaron"],
            examples: [
              ["Me lavé el cabello anoche.", "Я вымыл волосы вчера вечером."],
              ["Se lavaron las manos después de jugar.", "Они помыли руки после игры."]
            ]
          }
        },
        futuro: {
          normal: {
            forms: ["lavaré","lavarás","lavará","lavaremos","lavaréis","lavarán"],
            examples: [
              ["Lavaré la ropa mañana.", "Я постираю одежду завтра."],
              ["Lavarán el coche el domingo.", "Они помоют машину в воскресенье."]
            ]
          },
          reflex: {
            forms: ["me lavaré","te lavarás","se lavará","nos lavaremos","os lavaréis","se lavarán"],
            examples: [
              ["Me lavaré las manos antes de cocinar.", "Я помою руки перед готовкой."],
              ["Nos lavaremos después del trabajo.", "Мы умоемся после работы."]
            ]
          }
        }
      }
    },

    "cocinar": {
      ru: "готовить",
      reflexive: false,
      tenses: {
        presente: {
          normal: {
            forms: ["cocino","cocinas","cocina","cocinamos","cocináis","cocinan"],
            examples: [
              ["Cocino la cena cada noche.", "Я готовлю ужин каждый вечер."],
              ["Cocinamos juntos los domingos.", "Мы готовим вместе по воскресеньям."]
            ]
          }
        },
        pasado: {
          normal: {
            forms: ["cociné","cocinaste","cocinó","cocinamos","cocinasteis","cocinaron"],
            examples: [
              ["Cociné algo especial ayer.", "Я приготовил что-то особенное вчера."],
              ["Cocinaron para toda la familia.", "Они готовили для всей семьи."]
            ]
          }
        },
        futuro: {
          normal: {
            forms: ["cocinaré","cocinarás","cocinará","cocinaremos","cocinaréis","cocinarán"],
            examples: [
              ["Cocinaré una sopa mañana.", "Я приготовлю суп завтра."],
              ["Cocinaremos para los invitados.", "Мы приготовим для гостей."]
            ]
          }
        }
      }
    }
  }
};
