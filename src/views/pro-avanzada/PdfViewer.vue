<template>
    <div>
      <div>
        <button @click="loadPDF">Cargar PDF</button>
      </div>
      <div v-if="pdfLoaded">
        <canvas ref="pdfCanvas"></canvas>
      </div>
    </div>
  </template>
  
  <script>
  import pdfjsLib from 'pdfjs-dist/build/pdf';
  
  export default {
    data() {
      return {
        pdfPath: require('@/assets/archivos/Pensum.pdf'),
        pdfLoaded: false,
        pdfDoc: null,
        pdfPage: 1,
      };
    },
    methods: {
      async loadPDF() {
        const pdfData = await this.fetchPDF(this.pdfPath);
        const pdf = await pdfjsLib.getDocument({ data: pdfData }).promise;
  
        this.pdfLoaded = true;
        this.pdfDoc = pdf;
        this.renderPage(this.pdfPage);
      },
      async fetchPDF(pdfPath) {
        const response = await fetch(pdfPath);
        const arrayBuffer = await response.arrayBuffer();
        return new Uint8Array(arrayBuffer);
      },
      async renderPage(pageNum) {
        const pdfPage = await this.pdfDoc.getPage(pageNum);
        const canvas = this.$refs.pdfCanvas;
        const context = canvas.getContext('2d');
        const viewport = pdfPage.getViewport({ scale: 1 });
  
        canvas.height = viewport.height;
        canvas.width = viewport.width;
  
        await pdfPage.render({ canvasContext: context, viewport }).promise;
      },
    },
  };
  </script>
  
  