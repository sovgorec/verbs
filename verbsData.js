const VERBS = {
  "Популярные": {

    // ===== Глагол SER =====
    "ser": {
      ru: "быть (постоянно)",
      reflexive: false,
      tenses: {
        presente: {
          forms: ["soy","eres","es","somos","sois","son"],
          reflexForms: ["","","","","",""],
          examples: [
            { es:"Soy feliz hoy.", ru:"Я сегодня счастлив." },
            { es:"Eres muy amable.", ru:"Ты очень добрый." },
            { es:"Él es profesor de español.", ru:"Он преподаватель испанского." },
            { es:"Somos amigos desde la infancia.", ru:"Мы друзья с детства." },
            { es:"Sois muy trabajadores.", ru:"Вы очень трудолюбивые." },
            { es:"Son personas sinceras.", ru:"Они искренние люди." }
          ],
          examplesReflex: []
        },
        pasado: {
          forms: ["fui","fuiste","fue","fuimos","fuisteis","fueron"],
          reflexForms: ["","","","","",""],
          examples: [
            { es:"Fui estudiante en Madrid.", ru:"Я был студентом в Мадриде." },
            { es:"Fuiste mi mejor amigo.", ru:"Ты был моим лучшим другом." },
            { es:"Él fue un gran artista.", ru:"Он был великим художником." },
            { es:"Fuimos vecinos hace años.", ru:"Мы были соседями много лет назад." },
            { es:"Fuisteis invitados a la boda.", ru:"Вы были приглашены на свадьбу." },
            { es:"Fueron parte del equipo.", ru:"Они были частью команды." }
          ],
          examplesReflex: []
        },
        futuro: {
          forms: ["seré","serás","será","seremos","seréis","serán"],
          reflexForms: ["","","","","",""],
          examples: [
            { es:"Seré más fuerte mañana.", ru:"Завтра я буду сильнее." },
            { es:"Serás un gran músico.", ru:"Ты станешь отличным музыкантом." },
            { es:"Él será famoso algún día.", ru:"Он однажды станет знаменитым." },
            { es:"Seremos felices juntos.", ru:"Мы будем счастливы вместе." },
            { es:"Seréis bienvenidos en mi casa.", ru:"Вы будете желанными гостями в моём доме." },
            { es:"Serán recordados por siempre.", ru:"Их будут помнить всегда." }
          ],
          examplesReflex: []
        }
      }
    },

    // ===== Глагол ESTAR =====
    "estar": {
      ru: "быть (временно, находиться)",
      reflexive: false,
      tenses: {
        presente: {
          forms: ["estoy","estás","está","estamos","estáis","están"],
          reflexForms: ["","","","","",""],
          examples: [
            { es:"Estoy cansado después del trabajo.", ru:"Я устал после работы." },
            { es:"Estás en casa.", ru:"Ты дома." },
            { es:"Él está enfermo hoy.", ru:"Он сегодня болен." },
            { es:"Estamos listos para salir.", ru:"Мы готовы выходить." },
            { es:"Estáis muy contentos.", ru:"Вы очень довольны." },
            { es:"Están en el parque.", ru:"Они в парке." }
          ],
          examplesReflex: []
        },
        pasado: {
          forms: ["estuve","estuviste","estuvo","estuvimos","estuvisteis","estuvieron"],
          reflexForms: ["","","","","",""],
          examples: [
            { es:"Estuve en España el año pasado.", ru:"Я был в Испании в прошлом году." },
            { es:"Estuviste en la fiesta, ¿verdad?", ru:"Ты был на вечеринке, правда?" },
            { es:"Él estuvo muy ocupado.", ru:"Он был очень занят." },
            { es:"Estuvimos de vacaciones juntos.", ru:"Мы были в отпуске вместе." },
            { es:"Estuvisteis en el restaurante.", ru:"Вы были в ресторане." },
            { es:"Estuvieron muy felices aquel día.", ru:"Они были счастливы в тот день." }
          ],
          examplesReflex: []
        },
        futuro: {
          forms: ["estaré","estarás","estará","estaremos","estaréis","estarán"],
          reflexForms: ["","","","","",""],
          examples: [
            { es:"Estaré en casa mañana.", ru:"Завтра я буду дома." },
            { es:"Estarás ocupado todo el día.", ru:"Ты будешь занят весь день." },
            { es:"Él estará de viaje.", ru:"Он будет в поездке." },
            { es:"Estaremos preparados para el examen.", ru:"Мы будем готовы к экзамену." },
            { es:"Estaréis juntos pronto.", ru:"Вы скоро будете вместе." },
            { es:"Estarán aquí a las ocho.", ru:"Они будут здесь в восемь." }
          ],
          examplesReflex: []
        }
      }
    },

    // ===== Глагол TENER =====
    "tener": {
      ru: "иметь, обладать",
      reflexive: false,
      tenses: {
        presente: {
          forms: ["tengo","tienes","tiene","tenemos","tenéis","tienen"],
          reflexForms: ["","","","","",""],
          examples: [
            { es:"Tengo un coche nuevo.", ru:"У меня новая машина." },
            { es:"Tienes mucho trabajo.", ru:"У тебя много работы." },
            { es:"Él tiene una familia grande.", ru:"У него большая семья." },
            { es:"Tenemos tiempo para descansar.", ru:"У нас есть время для отдыха." },
            { es:"Tenéis suerte.", ru:"Вам повезло." },
            { es:"Tienen una casa cerca del mar.", ru:"У них дом у моря." }
          ],
          examplesReflex: []
        },
        pasado: {
          forms: ["tuve","tuviste","tuvo","tuvimos","tuvisteis","tuvieron"],
          reflexForms: ["","","","","",""],
          examples: [
            { es:"Tuve un día difícil.", ru:"У меня был сложный день." },
            { es:"Tuviste una buena idea.", ru:"У тебя была отличная идея." },
            { es:"Él tuvo un accidente leve.", ru:"Он попал в лёгкое ДТП." },
            { es:"Tuvimos suerte ayer.", ru:"Нам вчера повезло." },
            { es:"Tuvisteis una oportunidad única.", ru:"У вас была уникальная возможность." },
            { es:"Tuvieron mucho éxito.", ru:"Они добились большого успеха." }
          ],
          examplesReflex: []
        },
        futuro: {
          forms: ["tendré","tendrás","tendrá","tendremos","tendréis","tendrán"],
          reflexForms: ["","","","","",""],
          examples: [
            { es:"Tendré más tiempo mañana.", ru:"Завтра у меня будет больше времени." },
            { es:"Tendrás un día ocupado.", ru:"У тебя будет насыщенный день." },
            { es:"Él tendrá un hijo pronto.", ru:"У него скоро родится ребёнок." },
            { es:"Tendremos vacaciones en julio.", ru:"У нас будет отпуск в июле." },
            { es:"Tendréis una sorpresa.", ru:"У вас будет сюрприз." },
            { es:"Tendrán una reunión importante.", ru:"У них будет важная встреча." }
          ],
          examplesReflex: []
        }
      }
    },

    // ===== Глагол IR =====
"ir": {
  ru: "идти, ехать",
  reflexive: true,
  tenses: {
    presente: {
      forms: ["voy","vas","va","vamos","vais","van"],
      reflexForms: ["me voy","te vas","se va","nos vamos","os vais","se van"],
      examples: [
        { es:"Voy al trabajo en metro.", ru:"Я еду на работу на метро." },
        { es:"Vas al gimnasio todos los días.", ru:"Ты ходишь в спортзал каждый день." },
        { es:"Él va al colegio temprano.", ru:"Он рано идёт в школу." },
        { es:"Vamos al cine esta noche.", ru:"Мы идём в кино сегодня вечером." },
        { es:"Vais al parque con los niños.", ru:"Вы идёте в парк с детьми." },
        { es:"Van al supermercado juntos.", ru:"Они идут вместе в супермаркет." }
      ],
      examplesReflex: [
        { es:"Me voy a casa.", ru:"Я ухожу домой." },
        { es:"Te vas muy temprano.", ru:"Ты уходишь очень рано." },
        { es:"Se va del trabajo cansado.", ru:"Он уходит с работы уставшим." },
        { es:"Nos vamos de vacaciones mañana.", ru:"Мы уезжаем в отпуск завтра." },
        { es:"Os vais sin avisar.", ru:"Вы уходите, не предупредив." },
        { es:"Se van a dormir.", ru:"Они ложатся спать." }
      ]
    }
  }
}, // ← одна запятая, чтобы закрыть глагол ir

// ===== Глагол HACER =====
        "hacer": {
          ru: "делать, создавать",
          reflexive: false,
          tenses: {
            presente: {
              forms: ["hago","haces","hace","hacemos","hacéis","hacen"],
              reflexForms: ["","","","","",""],
              examples: [
                { es:"Hago ejercicio por la mañana.", ru:"Я делаю зарядку по утрам." },
                { es:"Haces un buen trabajo.", ru:"Ты хорошо работаешь." },
                { es:"Él hace café cada día.", ru:"Он делает кофе каждый день." },
                { es:"Hacemos la cama después de levantarnos.", ru:"Мы заправляем кровать после пробуждения." },
                { es:"Hacéis planes para el verano.", ru:"Вы строите планы на лето." },
                { es:"Hacen ruido los vecinos.", ru:"Соседи шумят." }
              ],
              examplesReflex: []
            },
            pasado: {
              forms: ["hice","hiciste","hizo","hicimos","hicisteis","hicieron"],
              reflexForms: ["","","","","",""],
              examples: [
                { es:"Hice una torta deliciosa.", ru:"Я приготовил вкусный торт." },
                { es:"Hiciste algo especial ayer.", ru:"Ты сделал что-то особенное вчера." },
                { es:"Él hizo su tarea a tiempo.", ru:"Он сделал домашнюю работу вовремя." },
                { es:"Hicimos un viaje inolvidable.", ru:"Мы совершили незабываемое путешествие." },
                { es:"Hicisteis mucho ruido.", ru:"Вы сильно шумели." },
                { es:"Hicieron un buen trabajo en equipo.", ru:"Они отлично поработали в команде." }
              ],
              examplesReflex: []
            },
            futuro: {
              forms: ["haré","harás","hará","haremos","haréis","harán"],
              reflexForms: ["","","","","",""],
              examples: [
                { es:"Haré lo mejor que pueda.", ru:"Я сделаю всё, что смогу." },
                { es:"Harás deporte mañana.", ru:"Ты займёшься спортом завтра." },
                { es:"Él hará una presentación.", ru:"Он сделает презентацию." },
                { es:"Haremos la cena juntos.", ru:"Мы приготовим ужин вместе." },
                { es:"Haréis un viaje pronto.", ru:"Вы скоро поедете в путешествие." },
                { es:"Harán lo correcto.", ru:"Они поступят правильно." }
              ],
              examplesReflex: []
            }
          }
        },

        // ===== Глагол PODER =====
        "poder": {
          ru: "мочь, иметь возможность",
          reflexive: false,
          tenses: {
            presente: {
              forms: ["puedo","puedes","puede","podemos","podéis","pueden"],
              reflexForms: ["","","","","",""],
              examples: [
                { es:"Puedo ayudarte con eso.", ru:"Я могу помочь тебе с этим." },
                { es:"Puedes venir mañana.", ru:"Ты можешь прийти завтра." },
                { es:"Él puede conducir muy bien.", ru:"Он отлично водит машину." },
                { es:"Podemos hacerlo juntos.", ru:"Мы можем сделать это вместе." },
                { es:"Podéis intentarlo otra vez.", ru:"Вы можете попробовать снова." },
                { es:"Pueden esperar un poco.", ru:"Они могут немного подождать." }
              ],
              examplesReflex: []
            },
            pasado: {
              forms: ["pude","pudiste","pudo","pudimos","pudisteis","pudieron"],
              reflexForms: ["","","","","",""],
              examples: [
                { es:"Pude terminar el trabajo a tiempo.", ru:"Я смог закончить работу вовремя." },
                { es:"Pudiste encontrar la llave.", ru:"Ты смог найти ключ." },
                { es:"Él pudo hablar con ella.", ru:"Он смог поговорить с ней." },
                { es:"Pudimos llegar antes de la lluvia.", ru:"Мы смогли прийти до дождя." },
                { es:"Pudisteis resolver el problema.", ru:"Вы смогли решить проблему." },
                { es:"Pudieron ver el amanecer.", ru:"Они смогли увидеть рассвет." }
              ],
              examplesReflex: []
            },
            futuro: {
              forms: ["podré","podrás","podrá","podremos","podréis","podrán"],
              reflexForms: ["","","","","",""],
              examples: [
                { es:"Podré visitarte pronto.", ru:"Я смогу навестить тебя скоро." },
                { es:"Podrás hacerlo mejor.", ru:"Ты сможешь сделать это лучше." },
                { es:"Él podrá descansar mañana.", ru:"Он сможет отдохнуть завтра." },
                { es:"Podremos viajar en verano.", ru:"Мы сможем поехать летом." },
                { es:"Podréis verlo en directo.", ru:"Вы сможете увидеть это вживую." },
                { es:"Podrán resolverlo fácilmente.", ru:"Они смогут легко это решить." }
              ],
              examplesReflex: []
            }
          }
        },

        // ===== Глагол DECIR =====
        "decir": {
          ru: "сказать, говорить",
          reflexive: false,
          tenses: {
            presente: {
              forms: ["digo","dices","dice","decimos","decís","dicen"],
              reflexForms: ["me digo","te dices","se dice","nos decimos","os decís","se dicen"],
              examples: [
                { es:"Digo la verdad siempre.", ru:"Я всегда говорю правду." },
                { es:"Dices cosas interesantes.", ru:"Ты говоришь интересные вещи." },
                { es:"Él dice que todo está bien.", ru:"Он говорит, что всё хорошо." },
                { es:"Decimos lo que pensamos.", ru:"Мы говорим то, что думаем." },
                { es:"Decís la misma historia otra vez.", ru:"Вы рассказываете ту же историю снова." },
                { es:"Dicen que va a llover.", ru:"Говорят, что пойдёт дождь." }
              ],
              examplesReflex: [
                { es:"Me digo que todo saldrá bien.", ru:"Я говорю себе, что всё получится." },
                { es:"Te dices mentiras a veces.", ru:"Ты иногда врёшь себе." },
                { es:"Se dice la verdad en voz alta.", ru:"Он говорит себе правду вслух." },
                { es:"Nos decimos la verdad siempre.", ru:"Мы всегда говорим себе правду." },
                { es:"Os decís que podéis hacerlo.", ru:"Вы говорите себе, что сможете это сделать." },
                { es:"Se dicen palabras de ánimo.", ru:"Они говорят себе слова поддержки." }
              ]
            },
            pasado: {
              forms: ["dije","dijiste","dijo","dijimos","dijisteis","dijeron"],
              reflexForms: ["","","","","",""],
              examples: [
                { es:"Dije lo que pensaba.", ru:"Я сказал то, что думал." },
                { es:"Dijiste la verdad.", ru:"Ты сказал правду." },
                { es:"Él dijo que venía.", ru:"Он сказал, что придёт." },
                { es:"Dijimos adiós al verano.", ru:"Мы попрощались с летом." },
                { es:"Dijisteis cosas graciosas.", ru:"Вы сказали что-то забавное." },
                { es:"Dijeron muchas mentiras.", ru:"Они сказали много лжи." }
              ],
              examplesReflex: []
            },
            futuro: {
              forms: ["diré","dirás","dirá","diremos","diréis","dirán"],
              reflexForms: ["","","","","",""],
              examples: [
                { es:"Diré todo mañana.", ru:"Я всё скажу завтра." },
                { es:"Dirás la verdad, ¿verdad?", ru:"Ты скажешь правду, правда?" },
                { es:"Él dirá lo necesario.", ru:"Он скажет всё нужное." },
                { es:"Diremos algo bonito.", ru:"Мы скажем что-то приятное." },
                { es:"Diréis que teníamos razón.", ru:"Вы скажете, что мы были правы." },
                { es:"Dirán las noticias pronto.", ru:"Они объявят новости скоро." }
              ],
              examplesReflex: []
            }
          }
        },

        // ===== Глагол VER =====
        "ver": {
          ru: "видеть, смотреть",
          reflexive: false,
          tenses: {
            presente: {
              forms: ["veo","ves","ve","vemos","veis","ven"],
              reflexForms: ["me veo","te ves","se ve","nos vemos","os veis","se ven"],
              examples: [
                { es:"Veo la televisión por la noche.", ru:"Я смотрю телевизор вечером." },
                { es:"Ves a tus amigos cada semana.", ru:"Ты видишь своих друзей каждую неделю." },
                { es:"Él ve algo extraño.", ru:"Он видит что-то странное." },
                { es:"Vemos las estrellas juntos.", ru:"Мы смотрим на звёзды вместе." },
                { es:"Veis el partido en casa.", ru:"Вы смотрите матч дома." },
                { es:"Ven la película nueva.", ru:"Они смотрят новый фильм." }
              ],
              examplesReflex: [
                { es:"Me veo al espejo cada mañana.", ru:"Я смотрю на себя в зеркало каждое утро." },
                { es:"Te ves cansado hoy.", ru:"Ты выглядишь усталым сегодня." },
                { es:"Se ve muy elegante.", ru:"Он выглядит очень элегантно." },
                { es:"Nos vemos mañana.", ru:"Увидимся завтра." },
                { es:"Os veis diferentes hoy.", ru:"Вы сегодня выглядите иначе." },
                { es:"Se ven felices juntos.", ru:"Они выглядят счастливыми вместе." }
              ]
            },
            pasado: {
              forms: ["vi","viste","vio","vimos","visteis","vieron"],
              reflexForms: ["","","","","",""],
              examples: [
                { es:"Vi una película increíble.", ru:"Я посмотрел потрясающий фильм." },
                { es:"Viste el accidente ayer.", ru:"Ты видел аварию вчера." },
                { es:"Él vio un arcoíris.", ru:"Он видел радугу." },
                { es:"Vimos algo raro en el cielo.", ru:"Мы видели что-то странное на небе." },
                { es:"Visteis el mar por primera vez.", ru:"Вы впервые увидели море." },
                { es:"Vieron el final del partido.", ru:"Они видели конец матча." }
              ],
              examplesReflex: []
            },
            futuro: {
              forms: ["veré","verás","verá","veremos","veréis","verán"],
              reflexForms: ["","","","","",""],
              examples: [
                { es:"Veré a mis padres este fin de semana.", ru:"Я увижу родителей в эти выходные." },
                { es:"Verás que tengo razón.", ru:"Ты увидишь, что я прав." },
                { es:"Él verá el amanecer.", ru:"Он увидит рассвет." },
                { es:"Veremos una película nueva.", ru:"Мы посмотрим новый фильм." },
                { es:"Veréis la diferencia.", ru:"Вы увидите разницу." },
                { es:"Verán todo con claridad.", ru:"Они всё увидят ясно." }
              ],
              examplesReflex: []
            }
          }
        },

        // ===== Глагол VENIR =====
        "venir": {
          ru: "приходить, приезжать",
          reflexive: false,
          tenses: {
            presente: {
              forms: ["vengo","vienes","viene","venimos","venís","vienen"],
              reflexForms: ["me vengo","te vienes","se viene","nos venimos","os venís","se vienen"],
              examples: [
                { es:"Vengo del trabajo.", ru:"Я иду с работы." },
                { es:"Vienes a casa temprano.", ru:"Ты приходишь домой рано." },
                { es:"Él viene todos los días.", ru:"Он приходит каждый день." },
                { es:"Venimos a visitarte.", ru:"Мы приходим тебя навестить." },
                { es:"Venís con nosotros al cine.", ru:"Вы идёте с нами в кино." },
                { es:"Vienen de lejos.", ru:"Они приезжают издалека." }
              ],
              examplesReflex: [
                { es:"Me vengo abajo a veces.", ru:"Иногда я падаю духом." },
                { es:"Te vienes rápido cuando llamo.", ru:"Ты быстро приходишь, когда я зову." },
                { es:"Se viene corriendo.", ru:"Он прибегает бегом." },
                { es:"Nos venimos temprano hoy.", ru:"Мы пришли пораньше сегодня." },
                { es:"Os venís juntos siempre.", ru:"Вы всегда приходите вместе." },
                { es:"Se vienen cuando hay comida.", ru:"Они приходят, когда есть еда." }
              ]
            },
            pasado: {
              forms: ["vine","viniste","vino","vinimos","vinisteis","vinieron"],
              reflexForms: ["","","","","",""],
              examples: [
                { es:"Vine solo a la fiesta.", ru:"Я пришёл на вечеринку один." },
                { es:"Viniste con tus amigos.", ru:"Ты пришёл со своими друзьями." },
                { es:"Él vino tarde.", ru:"Он пришёл поздно." },
                { es:"Vinimos por curiosidad.", ru:"Мы пришли из любопытства." },
                { es:"Vinisteis de muy lejos.", ru:"Вы приехали издалека." },
                { es:"Vinieron todos juntos.", ru:"Они пришли все вместе." }
              ],
              examplesReflex: []
            },
            futuro: {
              forms: ["vendré","vendrás","vendrá","vendremos","vendréis","vendrán"],
              reflexForms: ["","","","","",""],
              examples: [
                { es:"Vendré mañana temprano.", ru:"Я приду завтра рано." },
                { es:"Vendrás a la reunión, ¿verdad?", ru:"Ты придёшь на встречу, правда?" },
                { es:"Él vendrá con su familia.", ru:"Он придёт со своей семьёй." },
                { es:"Vendremos con regalos.", ru:"Мы придём с подарками." },
                { es:"Vendréis cuando todo esté listo.", ru:"Вы придёте, когда всё будет готово." },
                { es:"Vendrán más tarde.", ru:"Они придут позже." }
              ],
              examplesReflex: []
            }
          }
        },

        // ===== Глагол QUERER =====
        "querer": {
          ru: "хотеть, любить",
          reflexive: false,
          tenses: {
            presente: {
              forms: ["quiero","quieres","quiere","queremos","queréis","quieren"],
              reflexForms: ["me quiero","te quieres","se quiere","nos queremos","os queréis","se quieren"],
              examples: [
                { es:"Quiero aprender español.", ru:"Я хочу выучить испанский." },
                { es:"Quieres un café.", ru:"Ты хочешь кофе." },
                { es:"Él quiere viajar más.", ru:"Он хочет больше путешествовать." },
                { es:"Queremos verte pronto.", ru:"Мы хотим тебя увидеть скоро." },
                { es:"Queréis salir esta noche.", ru:"Вы хотите выйти сегодня вечером." },
                { es:"Quieren comprar una casa.", ru:"Они хотят купить дом." }
              ],
              examplesReflex: [
                { es:"Me quiero mucho.", ru:"Я себя люблю." },
                { es:"Te quieres tal como eres.", ru:"Ты любишь себя таким, какой ты есть." },
                { es:"Se quiere demasiado.", ru:"Он слишком любит себя." },
                { es:"Nos queremos desde hace años.", ru:"Мы любим друг друга уже много лет." },
                { es:"Os queréis de verdad.", ru:"Вы действительно любите друг друга." },
                { es:"Se quieren mucho los dos.", ru:"Они оба очень любят друг друга." }
              ]
            },
            pasado: {
              forms: ["quise","quisiste","quiso","quisimos","quisisteis","quisieron"],
              reflexForms: ["","","","","",""],
              examples: [
                { es:"Quise ayudarte.", ru:"Я хотел тебе помочь." },
                { es:"Quisiste aprender más.", ru:"Ты хотел узнать больше." },
                { es:"Él quiso venir, pero no pudo.", ru:"Он хотел прийти, но не смог." },
                { es:"Quisimos quedarnos más tiempo.", ru:"Мы хотели остаться подольше." },
                { es:"Quisisteis ver la película.", ru:"Вы хотели посмотреть фильм." },
                { es:"Quisieron hacerlo solos.", ru:"Они хотели сделать это сами." }
              ],
              examplesReflex: []
            },
            futuro: {
  forms: ["querré","querrás","querrá","querremos","querréis","querrán"],
  reflexForms: ["","","","","",""],
  examples: [
    { es:"Querré descansar mañana.", ru:"Я захочу отдохнуть завтра." },
    { es:"Querrás saber la verdad.", ru:"Ты захочешь узнать правду." },
    { es:"Él querrá acompañarte.", ru:"Он захочет пойти с тобой." },
    { es:"Querremos visitar París.", ru:"Мы захотим посетить Париж." },
    { es:"Querréis volver aquí.", ru:"Вы захотите вернуться сюда." },
    { es:"Querrán quedarse más tiempo.", ru:"Они захотят остаться подольше." }
  ],
examplesReflex: []
}
      }
    }
  },
"В доме": {

  "cocinar": {
    ru: "готовить (еду)",
    reflexive: false,
    tenses: {
      presente: {
        forms: ["cocino","cocinas","cocina","cocinamos","cocináis","cocinan"],
        examples: [
          { es:"Cocino pasta los domingos.", ru:"Я готовлю пасту по воскресеньям." },
          { es:"Cocinas muy bien.", ru:"Ты очень хорошо готовишь." },
          { es:"Él cocina para toda la familia.", ru:"Он готовит для всей семьи." },
          { es:"Cocinamos juntos los fines de semana.", ru:"Мы готовим вместе по выходным." },
          { es:"Cocináis comida italiana.", ru:"Вы готовите итальянскую еду." },
          { es:"Cocinan con mucho amor.", ru:"Они готовят с любовью." }
        ]
      },
      pasado: {
        forms: ["cociné","cocinaste","cocinó","cocinamos","cocinasteis","cocinaron"],
        examples: [
          { es:"Cociné una sopa deliciosa ayer.", ru:"Вчера я приготовил вкусный суп." },
          { es:"Cocinaste para tus amigos.", ru:"Ты готовил для своих друзей." },
          { es:"Él cocinó arroz con verduras.", ru:"Он приготовил рис с овощами." },
          { es:"Cocinamos durante toda la tarde.", ru:"Мы готовили весь день." },
          { es:"Cocinasteis algo nuevo.", ru:"Вы приготовили что-то новое." },
          { es:"Cocinaron juntos para la cena.", ru:"Они вместе готовили ужин." }
        ]
      },
      futuro: {
        forms: ["cocinaré","cocinarás","cocinará","cocinaremos","cocinaréis","cocinarán"],
        examples: [
          { es:"Cocinaré esta noche.", ru:"Я приготовлю сегодня вечером." },
          { es:"Cocinarás tu plato favorito.", ru:"Ты приготовишь своё любимое блюдо." },
          { es:"Él cocinará para su novia.", ru:"Он приготовит для своей девушки." },
          { es:"Cocinaremos algo especial.", ru:"Мы приготовим что-то особенное." },
          { es:"Cocinaréis el desayuno mañana.", ru:"Вы приготовите завтрак завтра." },
          { es:"Cocinarán juntos el domingo.", ru:"Они будут готовить вместе в воскресенье." }
        ]
      }
    }
  },

  "limpiar": {
    ru: "убирать, чистить",
    reflexive: false,
    tenses: {
      presente: {
        forms: ["limpio","limpias","limpia","limpiamos","limpiáis","limpian"],
        examples: [
          { es:"Limpio la cocina cada día.", ru:"Я убираю кухню каждый день." },
          { es:"Limpias el baño los sábados.", ru:"Ты убираешь ванную по субботам." },
          { es:"Él limpia la mesa después de comer.", ru:"Он вытирает стол после еды." },
          { es:"Limpiamos el piso con aspiradora.", ru:"Мы чистим пол пылесосом." },
          { es:"Limpiais vuestras habitaciones.", ru:"Вы убираете свои комнаты." },
          { es:"Limpian toda la casa juntos.", ru:"Они убирают весь дом вместе." }
        ]
      },
      pasado: {
        forms: ["limpié","limpiaste","limpió","limpiamos","limpiasteis","limpiaron"],
        examples: [
          { es:"Limpié la nevera ayer.", ru:"Я почистил холодильник вчера." },
          { es:"Limpiaste las ventanas.", ru:"Ты помыл окна." },
          { es:"Él limpió su escritorio.", ru:"Он убрал свой стол." },
          { es:"Limpiamos el garaje juntos.", ru:"Мы убрали гараж вместе." },
          { es:"Limpiasteis el baño rápido.", ru:"Вы быстро убрали ванную." },
          { es:"Limpiaron todo en una hora.", ru:"Они всё убрали за час." }
        ]
      },
      futuro: {
        forms: ["limpiaré","limpiarás","limpiará","limpiaremos","limpiaréis","limpiarán"],
        examples: [
          { es:"Limpiaré la casa mañana.", ru:"Я уберу дом завтра." },
          { es:"Limpiarás el coche el domingo.", ru:"Ты помоешь машину в воскресенье." },
          { es:"Él limpiará el baño más tarde.", ru:"Он уберёт ванную позже." },
          { es:"Limpiaremos antes de la fiesta.", ru:"Мы уберём перед вечеринкой." },
          { es:"Limpiaréis después de cenar.", ru:"Вы уберёте после ужина." },
          { es:"Limpiarán el jardín pronto.", ru:"Они уберут сад скоро." }
        ]
      }
    }
  },

  "levantarse": {
    ru: "вставать, подниматься",
    reflexive: true,
    tenses: {
      presente: {
        forms: ["me levanto","te levantas","se levanta","nos levantamos","os levantáis","se levantan"],
        examples: [
          { es:"Me levanto a las siete.", ru:"Я встаю в семь утра." },
          { es:"Te levantas temprano.", ru:"Ты встаёшь рано." },
          { es:"Se levanta con energía.", ru:"Он встаёт с энергией." },
          { es:"Nos levantamos juntos.", ru:"Мы встаём вместе." },
          { es:"Os levantáis tarde los domingos.", ru:"Вы встаёте поздно по воскресеньям." },
          { es:"Se levantan sin despertador.", ru:"Они встают без будильника." }
        ]
      },
      pasado: {
        forms: ["me levanté","te levantaste","se levantó","nos levantamos","os levantasteis","se levantaron"],
        examples: [
          { es:"Me levanté tarde ayer.", ru:"Я встал поздно вчера." },
          { es:"Te levantaste cansado.", ru:"Ты встал уставшим." },
          { es:"Se levantó a las ocho.", ru:"Он встал в восемь." },
          { es:"Nos levantamos con lluvia.", ru:"Мы проснулись под дождь." },
          { es:"Os levantasteis de buen humor.", ru:"Вы встали в хорошем настроении." },
          { es:"Se levantaron antes del amanecer.", ru:"Они встали до рассвета." }
        ]
      },
      futuro: {
        forms: ["me levantaré","te levantarás","se levantará","nos levantaremos","os levantaréis","se levantarán"],
        examples: [
          { es:"Me levantaré temprano mañana.", ru:"Я встану рано завтра." },
          { es:"Te levantarás a las seis.", ru:"Ты встанешь в шесть." },
          { es:"Se levantará sin ayuda.", ru:"Он встанет без помощи." },
          { es:"Nos levantaremos para ver el amanecer.", ru:"Мы встанем, чтобы увидеть рассвет." },
          { es:"Os levantaréis pronto para viajar.", ru:"Вы встанете рано, чтобы поехать." },
          { es:"Se levantarán con el sol.", ru:"Они встанут с восходом солнца." }
        ]
      }
    }
  },

  "lavar": {
    ru: "мыть, стирать",
    reflexive: true,
    tenses: {
      presente: {
        forms: ["lavo","lavas","lava","lavamos","laváis","lavan"],
        examples: [
          { es:"Lavo los platos después de comer.", ru:"Я мою посуду после еды." },
          { es:"Lavas la ropa los sábados.", ru:"Ты стираешь по субботам." },
          { es:"Él lava el coche cada semana.", ru:"Он моет машину каждую неделю." },
          { es:"Lavamos las ventanas.", ru:"Мы моем окна." },
          { es:"Laváis las manos antes de comer.", ru:"Вы моете руки перед едой." },
          { es:"Lavan el suelo con agua caliente.", ru:"Они моют пол горячей водой." }
        ]
      }
    }
  },

  "descansar": {
    ru: "отдыхать",
    reflexive: false,
    tenses: {
      presente: {
        forms: ["descanso","descansas","descansa","descansamos","descansáis","descansan"],
        examples: [
          { es:"Descanso después de trabajar.", ru:"Я отдыхаю после работы." },
          { es:"Descansas un rato.", ru:"Ты немного отдыхаешь." },
          { es:"Él descansa en el sofá.", ru:"Он отдыхает на диване." },
          { es:"Descansamos los domingos.", ru:"Мы отдыхаем по воскресеньям." },
          { es:"Descansáis en casa.", ru:"Вы отдыхаете дома." },
          { es:"Descansan cuando pueden.", ru:"Они отдыхают, когда могут." }
        ]
      }
    }
  }
}
};