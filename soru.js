function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function(cevap) {
    return cevap === this.dogruCevap
}


var sorular = [
    new Soru("1 - Hangisi 12 Olimposlu Yunan Tanrısı arasında yer almaz?", {"a": "Athena" , "b": "Ares", "c": "Thor" , "d": "Hephaistos" , "e": "Apollon"}, "c"),
    new Soru("2 - Hangisi Türkiye Cumhuriyeti'nin komşu devletlerinden birisi değildir?", {"a": "Bulgaristan" , "b": "Yunanistan", "c": "iran" , "d": "Gürcistan" , "e": "Türkmenistan"}, "e"),
    new Soru("3 - Sefiller kitabının yazarı kimdir?", {"a": "Victor Hugo" , "b": "Balzac", "c": "Dostoyevski" , "d": "Franz Kafka" , "e": "Maksim Gorki"}, "a"),
    new Soru("4 - Turgut Özal'dan önceki cumhurbaşkanı hangisidir?", {"a": "Süleyman Demirel" , "b": "Kenan Evren", "c": "Bülent Ecevit" , "d": "Nrmettin" , "e": "Celal Bayar"}, "b"),
    new Soru("5 - Ünlü uyuşturucu karteli ve milyoner Pablo Escobar hangi ülkenin vatandaşıydı?", {"a": "Amerikan Birleişk Devletleri" , "b": "Boliva", "c": "Kolombiya" , "d": "Meksika" , "e": "Küba"}, "c"),
];
   