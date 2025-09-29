document.addEventListener("DOMContentLoaded", function() {
  const svgFilters = `
    <svg style="display:none;">
      <filter id="displacementFilter">
        <feImage href="images/displacement.png" preserveAspectRatio="none" />
        <feDisplacementMap in="SourceGraphic" scale="300" xChannelSelector="R" yChannelSelector="G" />
      </filter>
      <filter id="displacementFilterCircular">
        <feImage href="images/displacement-circular.png" preserveAspectRatio="none" />
        <feDisplacementMap in="SourceGraphic" scale="300" xChannelSelector="R" yChannelSelector="G" />
      </filter>
      <filter id="displacementFilterMenu">
        <feImage href="images/displacement-menu.png" preserveAspectRatio="none" />
        <feDisplacementMap in="SourceGraphic" scale="300" xChannelSelector="R" yChannelSelector="G" />
      </filter>
      <filter id="displacementFilterLarge">
        <feImage href="images/displacement-large.png" preserveAspectRatio="none" />
        <feDisplacementMap in="SourceGraphic" scale="300" xChannelSelector="R" yChannelSelector="G" />
      </filter>
    </svg>
  `;

  document.body.insertAdjacentHTML("afterbegin", svgFilters);
});