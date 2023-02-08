import { useEffect, useState } from "react";
import { Quote } from "../models/Quote";
import QuotesService from "../services/QuotesService";

export default function QuoteList() {
  const [quote, setQuote] = useState<Quote[]>();

  useEffect(() => {
    QuotesService().then((q) => setQuote([q]));
  }, []);

  useEffect(() => {
    console.log(quote);
  }, [quote]);

  let displayList = quote?.map((quotes) => (
    <ul>
      <li>{quotes.text}</li>
      <li>{quotes.author}</li>
    </ul>
  ));

  return <div className="Quotes">{displayList}</div>;
}
