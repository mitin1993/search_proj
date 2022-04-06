import { useState, useEffect, useRef } from "react";
import { SearchIcon, SwitchVerticalIcon } from "@heroicons/react/outline";
import "./App.css";

export const faqCategories = [
  {
    categoryId: 1,
    categoryName: "App",
    answers: [
      {
        id: 1,
        question: "Mam problem z płatnością",
        answer:
          "Jeśli problem występuje w przypadku konkretnej metody płatności (np. BLIK) spróbuj wybrać inną metodę. Jeżeli żadna metoda nie zadziałała lub otrzymujesz komunikat ze strony, który nie pomaga w rozwiązaniu sytuacji - skontaktuj się z nami.",
      },
      {
        id: 2,
        question: "Nie mogę zalogować się za pomocą numeru telefonu.",
        answer:
          "Numer telefonu musi być powiązany z adresem e-mail, który był wcześniej wykorzystany do składania zamówień poprzez naszą stronę internetową. Sprawdź czy nie wkradła się literówka lub wybierz inny sposób logowania do aplikacji. Jeżeli nic nie pomaga - skontaktuj się z nami.",
      },
      {
        id: 3,
        question: "Nie mogę zamówić box powyżej 15 kg.",
        answer:
          "Niestety w przypadku niektórych miejscowości nie ma możliwości zamówienia Boxu o wadze powyżej 15 kg, niestety trzeba usunąć niektóre produkty z koszyka (sugerujemy usunięcie ciężkich, łatwo dostępnych produktów, takich jak np. ziemniaki lub jabłka). Jest to wymóg narzucony przez firmę kurierską. Niestety w tym momencie nie mamy na to wpływu. Natomiast prowadzimy rozmowy z innymi podmiotami, by móc zaoferować Ci dostawę Boxu tak dużego, jak tylko chcesz!",
      },

      {
        id: 4,
        question: "Jak mogę dostać fakturę? ",
        answer:
          "Podaj dane firmy/osoby podczas składania zamówienia. Faktura będzie wysłana w mailu, gdy już zaksięgujemy wpłatę.",
      },
      {
        id: 5,
        question:
          "Mój kod rabatowy nie działa, co mogę zrobić w tej sytuacji? ",
        answer:
          "Sprawdź czy kod został wpisany poprawnie. Jeśli kod jest poprawny i masz pewność, że ten rabat Ci przysługuje i nie był odebrany wcześniej, skontaktuj się z nami.",
      },
      {
        id: 6,
        question: "Jak mogę uzyskać kod rabatowy?",
        answer:
          "Kod rabatowy możesz uzyskać polecając nas znajomym, więcej informacji na ten temat znajdziesz w mailu z potwierdzeniem Twojego zamówienia.",
      },
    ],
  },
  {
    categoryId: 2,
    categoryName: "Dostawa",
    answers: [
      {
        id: 7,
        question:
          "Dlaczego niektóre dostawy odbywają się w ciągu dnia, a inne w nocy?",
        answer:
          "Współpracujemy z kilkoma firmami kurierskimi, by zapewnić dostawy do większości miejscowości w kraju. Na terenie Warszawy istnieje możliwość wybrania dostawy dziennej w godzinach 8:00 -13:00 oraz dostawy nocnej w poniedziałki, środy oraz piątki.  Do miejscowości innych niż Warszawa dowozimy wyłącznie w godzinach nocnych.",
      },
      {
        id: 7,
        question: "Jak odbywa się dostawa nocna?",
        answer:
          "Dostawa nocna odbywa się w godzinach od 00:00 do 07:00 w wybranym dniu. Oznacza to, że jeśli zostanie wybrany poniedziałek, zamówienie dostarczymy w nocy z niedzieli na poniedziałek. W ten sposób rano zamówienie będzie już czekało pod Twoimi drzwiami. Nie zapomnij udostępnić kurierowi niezbędnych informacji, takich jak kod do furtki/drzwi, żeby mógł zrealizować nocną dostawę dyskretnie.",
      },
      {
        id: 8,
        question: "Jaki jest koszt dostawy? Od czego zależy?",
        answer:
          "Koszt dostawy wynosi 20 zł. Jeśli Twój koszyk przekroczy 80 zł, za dostawę zapłacisz jedynie 10 zł. Nie chcesz płacić za przesyłkę? Skorzystaj z darmowej dostawy przy wartości koszyka powyżej 160 zł.",
      },
      {
        id: 9,
        question:
          "Czy jest możliwość wybrania lub sprecyzowania godziny dostawy?",
        answer:
          "W skrócie - nie. Dostawa w godzinach nocnych odbywa się od 00:00 do 07:00, dzienna natomiast w godzinach 08:00 - 13:00. Dostawy są realizowane według tras zewnętrznej firmy kurierskiej, na które nie mamy wpływu.",
      },
      {
        id: 10,
        question:
          "Czy jest możliwość zamówienia kilku boxów w jednym zamówieniu?",
        answer:
          "W tym momencie takiej opcji nie ma, należy złożyć osobne zamówienie.",
      },
      {
        id: 11,
        question:
          "Czy jest możliwość zwrócenia kartonu z poprzedniego zamówienia?",
        answer:
          "Na terenie Warszawy odbieramy kartony z poprzednich zamówień. Złóż karton/y na płasko i po prostu przekaż kurierowi lub odłóż obok drzwi wejściowych. W przypadku zamówień krajowych, póki co nie możemy zaoferować odbioru kartonów. Skorzystaj z nich podczas przeprowadzki, do przechowywania innych rzeczy lub zbuduj domek dla kota. P.S w punktach kurierskich zawsze chętnie przyjmują kartony. ",
      },
      {
        id: 12,
        question: "Czy dowozicie do mojej miejscowości?",
        answer:
          "Realizujemy dostawy do większości miejscowości w Polsce. Sprawdź czy dowozimy również do Ciebie, wpisując swój kod pocztowy",
      },
    ],
  },
  {
    categoryId: 3,
    categoryName: "Produkty",
    answers: [
      {
        id: 13,
        question: "Skąd pochodzą wasze warzywa i owoce?",
        answer:
          "Większość produktów znajdujących się w Twoim Boxie pochodzi od lokalnych gospodarstw, mniejszych lub większych polskich i zagranicznych producentów, których wybraliśmy ze względu na niezmiennie wysoką jakość ich produktów.",
      },
      {
        id: 14,
        question: "Czy wasze produkty są ekologiczne?",
        answer:
          "W naszej ofercie znajdziesz między innymi produkty ekologiczne. Zawsze oznaczone są odpowiednim znaczkiem i numerem certyfikatu.",
      },
      {
        id: 15,
        question: "Co znajduje się w Boxach?",
        answer:
          "Ofertę dostosowujemy do sezonu, aby zawsze dostarczać tylko świeże i smaczne produkty. W okresie letnim w Boxach dominują polskie warzywa i owoce, natomiast w okresie zimowym znajdziesz w nich również egzotyczne produkty, które są w sezonie w kraju, z którego pochodzą.",
      },
      {
        id: 16,
        question: "Jaki Box wybrać?",
        answer:
          "Nasze Boxy różnią się wielkością i różnorodnością składników. Box Rekrut jest świetną opcją dla tych, którzy mieszkają sami i czasami jedzą na mieście. Ze składników Rekruta ugotujesz kilka śniadań i obiadów, a jabłka, gruszki i banany dostarczą Ci niezbędnych witamin. Box Rodzinny jest świetną opcją dla pary, a nawet pary z dzieckiem. Cała rodzina będzie się cieszyć różnorodnością warzyw i owoców od Wojny Warzyw przez cały tydzień.",
      },
      {
        id: 17,
        question: "Jak mogę wybrać składniki Boxu?",
        answer:
          "Po opłaceniu zamówienia otrzymasz mail, w którym znajdziesz przycisk «Zbuduj swój Box». W ten sposób wybierzesz ulubione produkty z kilku grup dostępnych składników. Jeśli składasz zamówienie na przyszły tydzień - mail z linkiem do wyboru składników dostaniesz dzień przed planowaną dostawą, ok. godziny 12:00.",
      },
      {
        id: 18,
        question: "Produkty ucierpiały w transporcie. Co zrobić?",
        answer:
          "Niestety, czasem się to zdarza. Niektóre produkty są bardziej wytrwałe (ziemniaki, marchewka, jabłka), ale niektóre są delikatniejsze i mogą ulec uszkodzeniu podczas transportu. Po pierwsze, keep calm. Po drugie, spróbuj uratować to co zostało uszkodzone! Nie odkładaj tego na później, gdyż może dojść do całkowitego zepsucia produktu. Po trzecie i najważniejsze, skontaktuj się z nami wysyłając zdjęcie uszkodzonych produktów, byśmy mogli zaoferować Ci opcje rozwiązania tej sytuacji.",
      },
      {
        id: 19,
        question: "W Boxie brakuje zamówionych produktów, co mam zrobić? ",
        answer:
          "Z racji tego, że nie trzymamy dużych stanów magazynowych, czasem dochodzi do zamiany brakującego na stanie składnika. Informujemy o tym za pomocą naklejki “Uwaga! Zastępstwo”. Jeśli zamiana Ci nie odpowiada lub doszło do innej pomyłki, zrób zdjęcie naklejek wewnątrz Boxu i wyślij do nas, postaramy się pomóc.",
      },
    ],
  },
  {
    categoryId: 4,
    categoryName: "Subskrypcja",
    answers: [
      {
        id: 21,
        question: "Jak działa subskrypcja?",
        answer:
          "Produkty, które wybierzesz w danym zamówieniu, mogą trafiać do Ciebie co tydzień, co dwa tygodnie lub w dowolnym odstępie czasu - Ty decydujesz! Płatność pobiera się automatycznie, 48 godzin przed planowaną datą dostarczenia. W wiadomości mailowej znajdziesz potwierdzenie zamówienia oraz przypomnienie z jego składnikami.",
      },
      {
        id: 22,
        question: "W jaki sposób mogę zarządzać subskrypcją?",
        answer:
          "Już pracujemy nad tym, by zarządzanie subskrypcją było dostępne z poziomu aplikacji mobilnej. Na chwilę obecną robimy to manualnie. Odezwij się do nas jeśli chcesz cokolwiek zmienić w Twojej subskrypcji. Reagujemy bardzo szybko.",
      },
      {
        id: 23,
        question: "Jak zrezygnować z subskrypcji? ",
        answer:
          "Zrezygnować lub chwilowo zawiesić subskrypcję możesz w dowolnym momencie bez żadnych dodatkowych opłat. Po prostu skontaktuj się z nami.",
      },
    ],
  },
];

function App() {
  const [query, setQuery] = useState("");
  const [content, setContent] = useState(faqCategories);
  let [current, setCurrent] = useState(-1);
  const lisRef = useRef([]);
  const [isTriggered, setIsTriggered] = useState(true); // cmd + k

  useEffect(() => {
    console.log("render");
    window.addEventListener("keydown", (e) => {
      if (e.key === "k" && e.metaKey) {
        setIsTriggered(!isTriggered);
      }
    });
  });

  useEffect(() => {
    if (!query) {
      setContent(faqCategories);
      return;
    }
    const filteredCats = [];
    for (let category of content) {
      let filteredAnswers = category.answers.filter(
        ({ answer, question }) =>
          answer.toLowerCase().includes(query) ||
          question.toLowerCase().includes(query)
      );
      if (filteredAnswers?.length) {
        filteredCats.push({ ...category, answers: filteredAnswers });
      }
    }

    setContent(filteredCats);
  }, [query]);

  useEffect(() => {
    let lis = lisRef.current;
    console.log(lis);
    console.log(lis.length - 1);

    window.addEventListener("keydown", (e) => {
      switch (e.key.toString()) {
        case "ArrowDown":
          e.preventDefault();
          if (current < lis.length - 1) {
            setCurrent(current++);
          } else
           {
            setCurrent(lis.length - 1);
          }
          lis[current]?.focus();
          console.log(lis[current], current);
          break;
        case "ArrowUp":
          e.preventDefault();
          if (current === 0) {
            lis[current]?.focus();
          } else {
            setCurrent(current--);
            lis[current]?.focus();
          }

          console.log(lis[current], current);
          break;

        default:
          return;
      }
    });
  }, [content]);

  return (
    <div className="h-screen w-screen bg-gray-600">
      <div
        style={isTriggered ? { display: "flex" } : { display: "none" }}
        className="w-screen z-10  rounded bg-gray-800 max-w-xs shadow-lg  sm:max-w-2xl  fixed top-1/4 left-1/2  max-h-[700px] -translate-y-1/4 -translate-x-1/2 flex flex-col justify-start items-center"
      >
        <div className="flex flex-row justify-start items-center h-16 rounded-t sm:max-w-2xl w-full p-5 border-b border-gray-50/[.20]  bg-gray-800 ">
          <SearchIcon className="w-8 h-8 mr-4 text-white" />
          <input
            onChange={(e) => setQuery(e.target.value)}
            style={{ caretColor: "white" }}
            className="w-full text-white text-xl bg-transparent outline-none "
            placeholder="Search tf you want..."
            type="text"
            value={query}
          />
        </div>
        <div className="w-full p-5 overflow-auto  ">
          {content.map((category) => (
            <ul id="cat" className="mb-6" key={category.categoryId}>
              <h2 id="catName" className="font-xl mb-4 text-yellow-100">
                {category.categoryName}
              </h2>
              {category.answers.map((answer) => (
                
                <li
                  ref={(li) => lisRef.current.push(li)}
                  tabIndex="-1"
                  id={answer.id}
                  className="mb-4 focus:bg-white/50 focus:bg-white/50"
                  key={answer.id + answer.question}
                >
                  <h3 className="text-gray-50">{answer.question}</h3>
                  <p className="text-gray-50/[.3]">{answer.answer}</p>
                </li>
              ))}
            </ul>
          ))}
        </div>

        <div className=" w-full border-t rounded-b border-gray-50/[.20] px-5 flex flex-row justify-start items-start ">
          <div className="flex h-10 flex-row justify-start items-center ">
            <SwitchVerticalIcon className="text-white h-5 mr-1" />
            <span className="text-white">Select</span>
            <span className="text-white ml-4">&#9166; Open</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
