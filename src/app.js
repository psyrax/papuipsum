jQuery(document).ready(function($){
    var papuIpsum = 'Papu ipsum momo ab oie shi, nam rick rola el pack.| De +10000 naiks momazo lince postea.| Summus te dan ban sit​​, fantasmon o feick?| De repoio o rehorneado momo SDLG abrirum ALV dictum mauris.| Hi naic plantilla momazo rolarum el Zelda, imo te dan banamex adventus HailGrasa anumah sicierto ke sad ponte vergas.| Qui ese man,  rola el pack deuna elfa bien rikolina.| Send nubes plox para ganso, suscitat heroe con tu pack.| Nome culpen for caldo de pollo noquiero go lum nepe.| HeilGrasa Mejichango an Linces +10000 Naiks.| Sicut Naic momo momazo et glorisus Pac :V Ward el Zelda Prro.| Ste Papu Ipsum C Mamut XD.| Papu ipsum dolor sit amet oat niu enel grupo.| Plox nopost repoio xq tevan adar banamex.| Ponte Sergio oel acmin tepasa por fantasmon prro.| Aesa elfa kesta bien rikolina rola el pack perono feik.| La waifu sepone grasosa.| Los papus conlas mamus.| Eres niu dejatu naik +10000 ytu gloriosus pac :V Kesad ALV pos me muero.| When stas pidiendo el pack auna elfa bien rikolina peroes feik.| Guerra de momos bien shidoris Khá?| ese man eselmero papu de papus.| C mamo tu momazo +1000.| Tu Gfa prro la dvd.| Vive100.| :V Papu ipsum tira arena enel rant.| Ola ke ase?| Poniendo un Papu Ipsum o ke ase?| a oc.| Papu ipsum dolor amet C mamo.| HeilGrasa cupim AW.| Ste man da naiks apuro CP.| Date.| Eso es repoio shiavo.| Mi momo es 100%.| No creas quesoy niu.| KYC prro.| ste men.| Hail Papu Ipsum.'.split('|');
    var papuLength = papuIpsum.length;

    var minPapuSize = 5;
    var maxPapuSize = 15;
    var initialPapugraph = getRandomInt(3, 6);

    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  function buildPapuParagraph(){
    var papus = getRandomInt(minPapuSize, maxPapuSize);
    var papuGraph = '';
    for (var i = papus - 1; i >= 0; i--) {
      var currentPapu = getRandomInt(0, papuLength-1);
      papuGraph += papuIpsum[currentPapu];
    };
    return papuGraph;
  }

  function buildTotalPapu(size){
    var papuGraphs = '';
    for (var i = size - 1; i >= 0; i--) {
      papuGraphs += '<p>' + buildPapuParagraph() + '</p>';
    };
    return papuGraphs;
  }


  var initialPapu = buildTotalPapu(initialPapugraph);
  $('#papuHolder').html(initialPapu);
  $('.papuGenerator').on('click', function(event){
    event.preventDefault();
    $('.papuLoader').addClass('papuShow');
    var papuParrafosInput = parseInt($('#papuparrafos').val());
    var papuParrafosOutput = buildTotalPapu(papuParrafosInput);
    $('#papuHolder').html(papuParrafosOutput);
    setTimeout(function(){
      $('.papuLoader').removeClass('papuShow');
    }, 1100);
  })
});