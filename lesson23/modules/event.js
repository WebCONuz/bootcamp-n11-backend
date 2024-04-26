import EventEmitter from "events";

const logEvents = (show) => {
  if (show) {
    // emitter obyektini yaratish
    class LogEmotter extends EventEmitter {}
    const myEmitter = new LogEmotter();

    // myEmitter.setMaxListeners(5); // => Biriktiriladigan eventlar sonini belgilash (cheklash)

    // event1
    function load(url) {
      console.log(`Yuklash ${url} da amalga oshirildi.`);
    }
    myEmitter.on("load", load);

    function load2(url) {
      console.log(`Yuklash2 ${url} da amalga oshirildi.`);
    }
    myEmitter.on("load", load2);

    // event2
    const unload = (url) => {
      console.log(`${url} sayti yuklanmadi`);
    };
    myEmitter.addListener("unload", unload);

    // myEmitter.once("load", load2);                 // => faqat 1 marta ishlaydi

    // myEmitter.removeListener("unload", unload);    // => eventga biriktirilgan funksiyani olib tashlash
    // myEmitter.removeAllListeners("load");          // => eventga biriktirilgan barcha funksiyalarni olib tashlash
    // myEmitter.off("unload", unload);               // => eventga biriktirilgan funksiyani olib tashlash (2-usul)

    // myEmitter.emit("load", "https://....");        // => load event yaratish
    // myEmitter.emit("unload", "https://kun.uz");    // => unload event yaratish

    // console.log(myEmitter.getMaxListeners());      // => eventga nechta funksiya biririktirish mumkinligini ko'rish
    // myEmitter.setMaxListeners(5);                  // => eventga nechta funksiya biririktirishni belgilash
    // console.log(myEmitter.getMaxListeners());

    myEmitter.on("error", (error) => {
      console.log("Xatolik", error.message);
    });
    myEmitter.emit("error", new Error("Bazaga yuklanmadi."));
  } else {
    console.log("Event moduli ishlab turibdi");
  }
};

export default logEvents;
