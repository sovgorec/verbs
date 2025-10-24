// ================================
// 🌎 Verbos Data — версия 2
// ================================

const VERB_DATA = {
  // ========================
  // 1️⃣ POPULARES
  // ========================
  "Populares": {
    "ser": {
      ru: "быть (постоянно)",
      pres: ["soy", "eres", "es", "somos", "sois", "son"],
      examples: [
        ["Soy feliz cuando paso tiempo con mi familia.", "Я счастлив, когда провожу время с семьёй."],
        ["Eres muy amable con todos.", "Ты очень добр ко всем."],
        ["Es un buen día para aprender algo nuevo.", "Хороший день, чтобы выучить что-то новое."],
        ["Somos personas curiosas.", "Мы любопытные люди."],
        ["Sois estudiantes de español, ¿verdad?", "Вы студенты испанского, верно?"],
        ["Son amigos desde la infancia.", "Они друзья с детства."]
      ]
    },
    "tener": {
      ru: "иметь",
      pres: ["tengo", "tienes", "tiene", "tenemos", "tenéis", "tienen"],
      examples: [
        ["Tengo mucho trabajo hoy.", "У меня сегодня много работы."],
        ["Tienes una sonrisa muy bonita.", "У тебя очень красивая улыбка."],
        ["Tiene una casa cerca del mar.", "У него дом недалеко от моря."],
        ["Tenemos tiempo para descansar.", "У нас есть время отдохнуть."],
        ["Tenéis una gran oportunidad.", "У вас отличная возможность."],
        ["Tienen dos hijos pequeños.", "У них двое маленьких детей."]
      ]
    },
    "hacer": {
      ru: "делать",
      pres: ["hago", "haces", "hace", "hacemos", "hacéis", "hacen"],
      examples: [
        ["Hago ejercicio cada mañana.", "Я занимаюсь спортом каждое утро."],
        ["Haces muchas preguntas interesantes.", "Ты задаёшь много интересных вопросов."],
        ["Hace frío en esta habitación.", "В этой комнате холодно."],
        ["Hacemos una fiesta el sábado.", "Мы устраиваем вечеринку в субботу."],
        ["Hacéis un buen trabajo.", "Вы делаете хорошую работу."],
        ["Hacen pan casero los domingos.", "Они пекут домашний хлеб по воскресеньям."]
      ]
    },
    "poder": {
      ru: "мочь",
      pres: ["puedo", "puedes", "puede", "podemos", "podéis", "pueden"],
      examples: [
        ["Puedo ayudarte a reparar el coche.", "Я могу помочь тебе починить машину."],
        ["¿Puedes venir mañana?", "Ты можешь прийти завтра?"],
        ["Puede leer sin gafas.", "Он может читать без очков."],
        ["Podemos cocinar juntos esta noche.", "Мы можем приготовить вместе сегодня вечером."],
        ["Podéis entrar, la puerta está abierta.", "Вы можете войти, дверь открыта."],
        ["Pueden aprender si practican cada día.", "Они могут научиться, если будут практиковаться каждый день."]
      ]
    },
    "decir": {
      ru: "сказать",
      pres: ["digo", "dices", "dice", "decimos", "decís", "dicen"],
      examples: [
        ["Digo la verdad siempre.", "Я всегда говорю правду."],
        ["¿Qué dices? No te oigo bien.", "Что ты говоришь? Я плохо тебя слышу."],
        ["Dice que vendrá más tarde.", "Он говорит, что придёт позже."],
        ["Decimos lo que pensamos.", "Мы говорим то, что думаем."],
        ["Decís cosas muy interesantes.", "Вы говорите очень интересные вещи."],
        ["Dicen que el clima cambiará mañana.", "Они говорят, что погода изменится завтра."]
      ]
    }
  },

  // ========================
  // 2️⃣ EN CASA
  // ========================
  "En casa": {
    "limpiar": {
      ru: "убирать, чистить",
      pres: ["limpio", "limpias", "limpia", "limpiamos", "limpiáis", "limpian"],
      examples: [
        ["Limpio la cocina después de cenar.", "Я убираю кухню после ужина."],
        ["Limpias la mesa con cuidado.", "Ты аккуратно вытираешь стол."],
        ["Limpia el baño cada semana.", "Он убирает ванную каждую неделю."],
        ["Limpiamos el salón los domingos.", "Мы убираем гостиную по воскресеньям."],
        ["Limpiáis las ventanas en primavera.", "Вы моете окна весной."],
        ["Limpian el polvo de los muebles.", "Они вытирают пыль с мебели."]
      ]
    },
    "cocinar": {
      ru: "готовить еду",
      pres: ["cocino", "cocinas", "cocina", "cocinamos", "cocináis", "cocinan"],
      examples: [
        ["Cocino pasta con verduras.", "Я готовлю пасту с овощами."],
        ["Cocinas muy bien el arroz.", "Ты очень хорошо готовишь рис."],
        ["Cocina para toda la familia.", "Он готовит для всей семьи."],
        ["Cocinamos juntos los fines de semana.", "Мы готовим вместе по выходным."],
        ["Cocináis platos nuevos cada semana.", "Вы готовите новые блюда каждую неделю."],
        ["Cocinan con mucho amor.", "Они готовят с любовью."]
      ]
    },
    "lavar": {
      ru: "мыть, стирать",
      pres: ["lavo", "lavas", "lava", "lavamos", "laváis", "lavan"],
      examples: [
        ["Lavo los platos después de comer.", "Я мою посуду после еды."],
        ["Lavas la ropa los lunes.", "Ты стираешь одежду по понедельникам."],
        ["Lava el coche los sábados.", "Он моет машину по субботам."],
        ["Lavamos las manos antes de comer.", "Мы моем руки перед едой."],
        ["Laváis los vasos en la cocina.", "Вы моете стаканы на кухне."],
        ["Lavan las cortinas una vez al año.", "Они стирают шторы раз в год."]
      ],
      reflex: {
        pres: ["me lavo", "te lavas", "se lava", "nos lavamos", "os laváis", "se lavan"],
        examples: [
          ["Me lavo la cara cada mañana.", "Я умываю лицо каждое утро."],
          ["Te lavas las manos antes de comer.", "Ты моешь руки перед едой."],
          ["Se lava el pelo con champú natural.", "Он моет волосы натуральным шампунем."],
          ["Nos lavamos después de hacer ejercicio.", "Мы моемся после тренировки."],
          ["Os laváis rápido por la mañana.", "Вы моетесь быстро утром."],
          ["Se lavan antes de dormir.", "Они моются перед сном."]
        ]
      }
    },
    "acostarse": {
      ru: "ложиться спать",
      pres: ["acuesto", "acuestas", "acuesta", "acostamos", "acostáis", "acuestan"],
      examples: [
        ["Acuesto temprano los fines de semana.", "Я ложусь рано по выходным."],
        ["Acuestas tarde cuando ves series.", "Ты ложишься поздно, когда смотришь сериалы."],
        ["Acuesta a los niños a las diez.", "Он укладывает детей в десять."],
        ["Acostamos después de cenar.", "Мы ложимся после ужина."],
        ["Acostáis a las once normalmente.", "Вы ложитесь в одиннадцать обычно."],
        ["Acuestan a los niños cada noche.", "Они укладывают детей каждую ночь."]
      ],
      reflex: {
        pres: ["me acuesto", "te acuestas", "se acuesta", "nos acostamos", "os acostáis", "se acuestan"],
        examples: [
          ["Me acuesto a las once todos los días.", "Я ложусь спать в одиннадцать каждый день."],
          ["Te acuestas tarde, ¿verdad?", "Ты ложишься поздно, правда?"],
          ["Se acuesta después de leer un poco.", "Он ложится спать после того, как немного почитает."],
          ["Nos acostamos después de ver una película.", "Мы ложимся после просмотра фильма."],
          ["Os acostáis temprano cuando trabajáis mucho.", "Вы ложитесь рано, когда много работаете."],
          ["Se acuestan después de los niños.", "Они ложатся после детей."]
        ]
      }
    },
    "sentarse": {
      ru: "садиться",
      pres: ["siento", "sientas", "sienta", "sentamos", "sentáis", "sientan"],
      examples: [
        ["Siento cansancio después del trabajo.", "Я чувствую усталость после работы."],
        ["Sientas bien ese color.", "Тебе идёт этот цвет."],
        ["Sienta a su hijo en la silla.", "Он сажает сына на стул."],
        ["Sentamos a los invitados en la mesa.", "Мы рассаживаем гостей за столом."],
        ["Sentáis a los niños juntos.", "Вы сажаете детей вместе."],
        ["Sientan respeto por sus padres.", "Они уважают своих родителей."]
      ],
      reflex: {
        pres: ["me siento", "te sientas", "se sienta", "nos sentamos", "os sentáis", "se sientan"],
        examples: [
          ["Me siento en el sofá para descansar.", "Я сажусь на диван, чтобы отдохнуть."],
          ["Te sientas al lado de la ventana.", "Ты садишься у окна."],
          ["Se sienta en la cocina con una taza de café.", "Он садится на кухне с чашкой кофе."],
          ["Nos sentamos a cenar juntos.", "Мы садимся ужинать вместе."],
          ["Os sentáis en el parque.", "Вы садитесь в парке."],
          ["Se sientan frente al televisor.", "Они садятся перед телевизором."]
        ]
      }
    }
  },

  // ========================
  // 3️⃣ EN PASEO
  // ========================
  "En paseo": {
    "caminar": {
      ru: "гулять, идти пешком",
      pres: ["camino", "caminas", "camina", "caminamos", "camináis", "caminan"],
      examples: [
        ["Camino todos los días por el parque.", "Я гуляю каждый день по парку."],
        ["Caminas muy rápido.", "Ты идёшь очень быстро."],
        ["Camina por la playa al atardecer.", "Он идёт по пляжу на закате."],
        ["Caminamos después de comer.", "Мы гуляем после еды."],
        ["Camináis juntos al trabajo.", "Вы идёте вместе на работу."],
        ["Caminan bajo la lluvia.", "Они гуляют под дождём."]
      ]
    },
    "ver": {
      ru: "видеть",
      pres: ["veo", "ves", "ve", "vemos", "veis", "ven"],
      examples: [
        ["Veo el mar desde mi ventana.", "Я вижу море из окна."],
        ["Ves a mucha gente en la calle.", "Ты видишь много людей на улице."],
        ["Ve un perro corriendo.", "Он видит бегущую собаку."],
        ["Vemos el atardecer juntos.", "Мы смотрим закат вместе."],
        ["Veis el tráfico desde el puente.", "Вы видите движение с моста."],
        ["Ven algo interesante en la tienda.", "Они видят что-то интересное в магазине."]
      ]
    },
    "esperar": {
      ru: "ждать",
      pres: ["espero", "esperas", "espera", "esperamos", "esperáis", "esperan"],
      examples: [
        ["Espero el autobús cada mañana.", "Я жду автобус каждое утро."],
        ["Esperas a tu amigo en la esquina.", "Ты ждёшь своего друга на углу."],
        ["Espera el tren con paciencia.", "Он ждёт поезд с терпением."],
        ["Esperamos en la parada.", "Мы ждём на остановке."],
        ["Esperáis a los niños frente a la escuela.", "Вы ждёте детей перед школой."],
        ["Esperan buenas noticias.", "Они ждут хороших новостей."]
      ]
    },
    "encontrarse": {
      ru: "встречаться, чувствовать себя",
      pres: ["encuentro", "encuentras", "encuentra", "encontramos", "encontráis", "encuentran"],
      examples: [
        ["Encuentro flores hermosas en el camino.", "Я нахожу красивые цветы по пути."],
        ["Encuentras nuevos lugares cada día.", "Ты находишь новые места каждый день."],
        ["Encuentra un banco para sentarse.", "Он находит скамейку, чтобы присесть."],
        ["Encontramos el parque fácilmente.", "Мы легко нашли парк."],
        ["Encontráis el camino de regreso.", "Вы находите дорогу обратно."],
        ["Encuentran a sus amigos en la plaza.", "Они встречают друзей на площади."]
      ],
      reflex: {
        pres: ["me encuentro", "te encuentras", "se encuentra", "nos encontramos", "os encontráis", "se encuentran"],
        examples: [
          ["Me encuentro con mis amigos en el parque.", "Я встречаюсь с друзьями в парке."],
          ["Te encuentras bien hoy?", "Ты чувствуешь себя хорошо сегодня?"],
          ["Se encuentra cansado después del paseo.", "Он чувствует себя уставшим после прогулки."],
          ["Nos encontramos en la esquina.", "Мы встречаемся на углу."],
          ["Os encontráis en el café cada tarde.", "Вы встречаетесь в кафе каждый вечер."],
          ["Se encuentran felices de verse.", "Они рады видеть друг друга."]
        ]
      }
    },
    "mirar": {
      ru: "смотреть",
      pres: ["miro", "miras", "mira", "miramos", "miráis", "miran"],
      examples: [
        ["Miro el cielo por la noche.", "Я смотрю на небо ночью."],
        ["Miras escaparates mientras caminas.", "Ты смотришь на витрины, пока идёшь."],
        ["Mira a los niños jugar.", "Он смотрит, как дети играют."],
        ["Miramos los árboles del parque.", "Мы смотрим на деревья в парке."],
        ["Miráis el río desde el puente.", "Вы смотрите на реку с моста."],
        ["Miran las estrellas juntos.", "Они смотрят на звёзды вместе."]
      ]
    }
  },

  // ========================
  // 4️⃣ EN LA TIENDA
  // ========================
  "En la tienda": {
    "comprar": {
      ru: "покупать",
      pres: ["compro", "compras", "compra", "compramos", "compráis", "compran"],
      examples: [
        ["Compro pan fresco cada mañana.", "Я покупаю свежий хлеб каждое утро."],
        ["Compras frutas en el mercado.", "Ты покупаешь фрукты на рынке."],
        ["Compra ropa para su hijo.", "Он покупает одежду для сына."],
        ["Compramos leche y café.", "Мы покупаем молоко и кофе."],
        ["Compráis regalos para la fiesta.", "Вы покупаете подарки для вечеринки."],
        ["Compran libros en la librería.", "Они покупают книги в книжном."]
      ]
    },
    "vender": {
      ru: "продавать",
      pres: ["vendo", "vendes", "vende", "vendemos", "vendéis", "venden"],
      examples: [
        ["Vendo flores en la esquina.", "Я продаю цветы на углу."],
        ["Vendes pan y pasteles.", "Ты продаёшь хлеб и пирожные."],
        ["Vende frutas frescas cada día.", "Он продаёт свежие фрукты каждый день."],
        ["Vendemos productos locales.", "Мы продаём местные продукты."],
        ["Vendéis en línea también.", "Вы продаёте и онлайн тоже."],
        ["Venden todo a buen precio.", "Они продают всё по хорошей цене."]
      ]
    },
    "pagar": {
      ru: "платить",
      pres: ["pago", "pagas", "paga", "pagamos", "pagáis", "pagan"],
      examples: [
        ["Pago en efectivo casi siempre.", "Я почти всегда плачу наличными."],
        ["Pagas con tarjeta, ¿verdad?", "Ты платишь картой, верно?"],
        ["Paga la cuenta del restaurante.", "Он оплачивает счёт в ресторане."],
        ["Pagamos juntos el regalo.", "Мы платим вместе за подарок."],
        ["Pagáis al llegar.", "Вы платите по прибытии."],
        ["Pagan todo antes de salir.", "Они платят всё перед уходом."]
      ]
    },
    "probarse": {
      ru: "примерять (одежду)",
      pres: ["pruebo", "pruebas", "prueba", "probamos", "probáis", "prueban"],
      examples: [
        ["Pruebo nuevos sabores de helado.", "Я пробую новые вкусы мороженого."],
        ["Pruebas suerte en la lotería.", "Ты пробуешь удачу в лотерее."],
        ["Prueba la comida antes de servirla.", "Он пробует еду перед подачей."],
        ["Probamos un método diferente.", "Мы пробуем другой метод."],
        ["Probáis distintos cafés.", "Вы пробуете разные виды кофе."],
        ["Prueban la nueva receta.", "Они пробуют новый рецепт."]
      ],
      reflex: {
        pres: ["me pruebo", "te pruebas", "se prueba", "nos probamos", "os probáis", "se prueban"],
        examples: [
          ["Me pruebo una chaqueta roja.", "Я примеряю красную куртку."],
          ["Te pruebas unos pantalones nuevos.", "Ты примеряешь новые брюки."],
          ["Se prueba un vestido elegante.", "Она примеряет элегантное платье."],
          ["Nos probamos los abrigos.", "Мы примеряем пальто."],
          ["Os probáis los zapatos.", "Вы примеряете обувь."],
          ["Se prueban la ropa juntos.", "Они вместе примеряют одежду."]
        ]
      }
    },
    "buscar": {
      ru: "искать",
      pres: ["busco", "buscas", "busca", "buscamos", "buscáis", "buscan"],
      examples: [
        ["Busco una camiseta blanca.", "Я ищу белую футболку."],
        ["Buscas algo especial para regalar.", "Ты ищешь что-то особенное, чтобы подарить."],
        ["Busca descuentos en la tienda.", "Он ищет скидки в магазине."],
        ["Buscamos el mejor precio.", "Мы ищем лучшую цену."],
        ["Buscáis ofertas de verano.", "Вы ищете летние предложения."],
        ["Buscan algo cómodo.", "Они ищут что-то удобное."]
      ]
    }
  },

  // ========================
  // 5️⃣ EN UNA CITA
  // ========================
  "En una cita": {
    "hablar": {
      ru: "разговаривать",
      pres: ["hablo","hablas","habla","hablamos","habláis","hablan"],
      examples: [
        ["Hablo sobre mis pasatiempos.", "Я рассказываю о своих увлечениях."],
        ["Hablas con una sonrisa.", "Ты говоришь с улыбкой."],
        ["Habla de sus viajes.", "Он рассказывает о своих путешествиях."],
        ["Hablamos de todo.", "Мы говорим обо всём."],
        ["Habláis tranquilamente.", "Вы разговариваете спокойно."],
        ["Hablan durante horas.", "Они разговаривают часами."]
      ]
    },
    "reírse": {
      ru: "смеяться",
      pres: ["río","ríes","ríe","reímos","reís","ríen"],
      examples: [
        ["Río mucho cuando estoy contigo.", "Я много смеюсь, когда с тобой."],
        ["Ríes con mis bromas.", "Ты смеёшься над моими шутками."],
        ["Ríe cuando la mira.", "Он смеётся, когда смотрит на неё."],
        ["Reímos juntos toda la noche.", "Мы смеёмся вместе всю ночь."],
        ["Reís de los recuerdos.", "Вы смеётесь над воспоминаниями."],
        ["Ríen felices durante la cena.", "Они счастливо смеются во время ужина."]
      ],
      reflex: {
        pres: ["me río","te ríes","se ríe","nos reímos","os reís","se ríen"],
        examples: [
          ["Me río porque estoy nervioso.", "Я смеюсь, потому что нервничаю."],
          ["Te ríes de mis chistes malos.", "Ты смеёшься над моими плохими шутками."],
          ["Se ríe cuando la halagan.", "Он смеётся, когда её хвалят."],
          ["Nos reímos al mismo tiempo.", "Мы смеёмся одновременно."],
          ["Os reís de la situación.", "Вы смеётесь над ситуацией."],
          ["Se ríen hasta llorar.", "Они смеются до слёз."]
        ]
      }
    },
    "besarse": {
      ru: "целоваться",
      pres: ["beso","besas","besa","besamos","besáis","besan"],
      examples: [
        ["Beso su mejilla al saludarla.", "Я целую её щёку при встрече."],
        ["Besas su mano.", "Ты целуешь её руку."],
        ["Besa con ternura.", "Он целует нежно."],
        ["Besamos bajo las estrellas.", "Мы целуемся под звёздами."],
        ["Besáis a vuestros seres queridos.", "Вы целуете своих близких."],
        ["Besan antes de despedirse.", "Они целуются перед прощанием."]
      ],
      reflex: {
        pres: ["me beso","te besas","se besa","nos besamos","os besáis","se besan"],
        examples: [
          ["Nos besamos al final de la cita.", "Мы поцеловались в конце свидания."],
          ["Se besan suavemente bajo la lluvia.", "Они целуются нежно под дождём."],
          ["Nos besamos en el coche.", "Мы целуемся в машине."],
          ["Se besan cuando se despiden.", "Они целуются, когда прощаются."],
          ["Nos besamos en el cine.", "Мы целуемся в кино."],
          ["Se besan antes de dormir.", "Они целуются перед сном."]
        ]
      }
    },
    "invitar": {
      ru: "приглашать",
      pres: ["invito","invitas","invita","invitamos","invitáis","invitan"],
      examples: [
        ["Invito a mi pareja a cenar.", "Я приглашаю свою пару на ужин."],
        ["Invitas a tus amigos al teatro.", "Ты приглашаешь друзей в театр."],
        ["Invita a salir mañana.", "Он приглашает выйти завтра."],
        ["Invitamos a cenar a casa.", "Мы приглашаем на ужин домой."],
        ["Invitáis a todos a la fiesta.", "Вы приглашаете всех на праздник."],
        ["Invitan a un café después de trabajar.", "Они приглашают на кофе после работы."]
      ]
    },
    "sentir": {
      ru: "чувствовать",
      pres: ["siento","sientes","siente","sentimos","sentís","sienten"],
      examples: [
        ["Siento mariposas en el estómago.", "Я чувствую бабочек в животе."],
        ["Sientes alegría al verla.", "Ты чувствуешь радость, когда видишь её."],
        ["Siente nervios antes de la cita.", "Он нервничает перед свиданием."],
        ["Sentimos cariño el uno por el otro.", "Мы чувствуем нежность друг к другу."],
        ["Sentís emoción durante la noche.", "Вы чувствуете волнение вечером."],
        ["Sienten amor verdadero.", "Они чувствуют настоящую любовь."]
      ]
    }
  },

  // ========================
  // 6️⃣ CON LOS NIÑOS
  // ========================
  "Con los niños": {
    "jugar": {
      ru: "играть",
      pres: ["juego","juegas","juega","jugamos","jugáis","juegan"],
      examples: [
        ["Juego con mis hijos en el parque.", "Я играю с детьми в парке."],
        ["Juegas con bloques de colores.", "Ты играешь с цветными кубиками."],
        ["Juega al escondite con sus amigos.", "Он играет в прятки с друзьями."],
        ["Jugamos con la pelota.", "Мы играем с мячом."],
        ["Jugáis a las cartas después de cenar.", "Вы играете в карты после ужина."],
        ["Juegan en el jardín todo el día.", "Они играют в саду весь день."]
      ]
    },
    "enseñar": {
      ru: "обучать, показывать",
      pres: ["enseño","enseñas","enseña","enseñamos","enseñáis","enseñan"],
      examples: [
        ["Enseño a mi hijo a leer.", "Я учу своего сына читать."],
        ["Enseñas a tus niños a compartir.", "Ты учишь своих детей делиться."],
        ["Enseña con paciencia y amor.", "Он обучает с терпением и любовью."],
        ["Enseñamos canciones nuevas.", "Мы учим новые песни."],
        ["Enseñáis a los niños números.", "Вы учите детей считать."],
        ["Enseñan valores importantes.", "Они прививают важные ценности."]
      ]
    },
    "ayudar": {
      ru: "помогать",
      pres: ["ayudo","ayudas","ayuda","ayudamos","ayudáis","ayudan"],
      examples: [
        ["Ayudo a mis hijos con la tarea.", "Я помогаю своим детям с уроками."],
        ["Ayudas a poner la mesa.", "Ты помогаешь накрыть на стол."],
        ["Ayuda a su hermana a vestirse.", "Он помогает своей сестре одеться."],
        ["Ayudamos a limpiar la casa.", "Мы помогаем убирать дом."],
        ["Ayudáis con la comida.", "Вы помогаете с едой."],
        ["Ayudan a sus amigos cuando lo necesitan.", "Они помогают друзьям, когда нужно."]
      ]
    },
    "reírse": {
      ru: "смеяться",
      pres: ["río","ríes","ríe","reímos","reís","ríen"],
      examples: [
        ["Río cuando los niños hacen travesuras.", "Я смеюсь, когда дети шалят."],
        ["Ríes al verlos bailar.", "Ты смеёшься, когда видишь, как они танцуют."],
        ["Ríe con las ocurrencias de su hijo.", "Он смеётся над выдумками своего сына."],
        ["Reímos todos juntos.", "Мы все смеёмся вместе."],
        ["Reís de los cuentos graciosos.", "Вы смеётесь над забавными историями."],
        ["Ríen todo el tiempo.", "Они смеются всё время."]
      ],
      reflex: {
        pres: ["me río","te ríes","se ríe","nos reímos","os reís","se ríen"],
        examples: [
          ["Nos reímos con los niños en el parque.", "Мы смеёмся с детьми в парке."],
          ["Se ríe de los chistes de su hija.", "Он смеётся над шутками своей дочери."],
          ["Nos reímos cuando jugamos.", "Мы смеёмся, когда играем."],
          ["Se ríen porque están felices.", "Они смеются, потому что счастливы."],
          ["Nos reímos juntos en la mesa.", "Мы смеёмся вместе за столом."],
          ["Se ríen hasta quedarse sin aliento.", "Они смеются, пока не останется дыхания."]
        ]
      }
    },
    "abrazarse": {
      ru: "обниматься",
      pres: ["abrazo","abrazas","abraza","abrazamos","abrazáis","abrazan"],
      examples: [
        ["Abrazo a mi hijo fuerte.", "Я крепко обнимаю своего сына."],
        ["Abrazas a tu madre con amor.", "Ты обнимаешь маму с любовью."],
        ["Abraza a su hermano pequeño.", "Он обнимает своего младшего брата."],
        ["Abrazamos a los abuelos al llegar.", "Мы обнимаем бабушку и дедушку, когда приезжаем."],
        ["Abrazáis a los niños antes de dormir.", "Вы обнимаете детей перед сном."],
        ["Abrazan a sus amigos al despedirse.", "Они обнимают друзей при прощании."]
      ],
      reflex: {
        pres: ["me abrazo","te abrazas","se abraza","nos abrazamos","os abrazáis","se abrazan"],
        examples: [
          ["Nos abrazamos fuerte después del colegio.", "Мы обнимаемся крепко после школы."],
          ["Se abrazan al reencontrarse.", "Они обнимаются, когда снова встречаются."],
          ["Nos abrazamos al final del día.", "Мы обнимаемся в конце дня."],
          ["Se abrazan porque se extrañaban.", "Они обнимаются, потому что скучали друг по другу."],
          ["Nos abrazamos para consolarnos.", "Мы обнимаемся, чтобы утешить друг друга."],
          ["Se abrazan antes de dormir.", "Они обнимаются перед сном."]
        ]
      }
    }
  }
};
