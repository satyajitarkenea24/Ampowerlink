import type { ChartOptions } from "@common/apexchart.model";
import { currency } from "@common/constants";

const randomizeArray = function (arg: any) {
  const array = arg.slice();
  let currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// data for the sparklines that appear below header area
var sparklineData = [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46];

export const spark1ChartOpts: Partial<ChartOptions> = {
  chart: {
    type: 'area',
    height: 160,
    sparkline: {
      enabled: true
    },
  },
  stroke: {
    width: 2,
    curve: 'straight'
  },
  fill: {
    opacity: 0.2,
  },
  series: [{
    name: 'Paces Sales ',
    data: randomizeArray(sparklineData)
  }],
  yaxis: {
    min: 0
  },
  colors: ["#727cf5"],
  title: {
    text: `${currency}424,652`,
    offsetX: 20,
    style: {
      fontSize: '24px'
    }
  },
  subtitle: {
    text: 'Sales',
    offsetX: 20,
    style: {
      fontSize: '14px'
    }
  }
}

export const spark2ChartOpts: Partial<ChartOptions> = {
  chart: {
    type: 'area',
    height: 160,
    sparkline: {
      enabled: true
    },
  },
  stroke: {
    width: 2,
    curve: 'straight'
  },
  fill: {
    opacity: 0.2,
  },
  series: [{
    name: 'Paces Expenses ',
    data: randomizeArray(sparklineData)
  }],
  yaxis: {
    min: 0
  },
  colors: ["#ffbc00"],
  title: {
    text: `${currency}235,312`,
    offsetX: 20,
    style: {
      fontSize: '24px'
    }
  },
  subtitle: {
    text: 'Expenses',
    offsetX: 20,
    style: {
      fontSize: '14px'
    }
  }
}

export const spark3ChartOpts: Partial<ChartOptions> = {
  chart: {
    type: 'area',
    height: 160,
    sparkline: {
      enabled: true
    },
  },
  stroke: {
    width: 2,
    curve: 'straight'
  },
  fill: {
    opacity: 0.2,
  },
  series: [{
    name: 'Net Profits ',
    data: randomizeArray(sparklineData)
  }],
  xaxis: {
    crosshairs: {
      width: 1
    },
  },
  yaxis: {
    min: 0
  },
  colors: ["#0acf97"],
  title: {
    text: `${currency}135,965`,
    offsetX: 20,
    style: {
      fontSize: '24px'
    }
  },
  subtitle: {
    text: 'Profits',
    offsetX: 20,
    style: {
      fontSize: '14px'
    }
  }
}

export const chart1Opts: Partial<ChartOptions> = {
  chart: {
    type: 'line',
    width: 140,
    height: 60,
    sparkline: {
      enabled: true
    }
  },
  series: [{
    data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
  }],
  stroke: {
    width: 2,
    curve: 'smooth'
  },
  markers: {
    size: 0
  },
  colors: ["#727cf5"],
  tooltip: {
    fixed: {
      enabled: false
    },
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return ''
        }
      }
    },
    marker: {
      show: false
    }
  }
}

export const chart5Opts: Partial<ChartOptions> = {
  chart: {
    type: 'bar',
    width: 100,
    height: 60,
    sparkline: {
      enabled: true
    }
  },
  plotOptions: {
    bar: {
      columnWidth: '80%'
    }
  },
  colors: ["#727cf5"],
  series: [{
    data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
  }],
  labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'],
  xaxis: {
    crosshairs: {
      width: 1
    },
  },
  tooltip: {
    fixed: {
      enabled: false
    },
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return ''
        }
      }
    },
    marker: {
      show: false
    }
  }
}


export const chart2Opts: Partial<ChartOptions> = {
  chart: {
    type: 'line',
    width: 140,
    height: 60,
    sparkline: {
      enabled: true
    }
  },
  colors: ["#0acf97"],
  series: [{
    data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14]
  }],
  stroke: {
    width: 2,
    curve: 'smooth'
  },
  markers: {
    size: 0
  },
  tooltip: {
    fixed: {
      enabled: false
    },
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return ''
        }
      }
    },
    marker: {
      show: false
    }
  }
}

export const chart6Opts: Partial<ChartOptions> = {
  chart: {
    type: 'bar',
    width: 100,
    height: 60,
    sparkline: {
      enabled: true
    }
  },
  plotOptions: {
    bar: {
      columnWidth: '80%'
    }
  },
  colors: ["#0acf97"],
  series: [{
    data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14]
  }],
  labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'],
  xaxis: {
    crosshairs: {
      width: 1
    },
  },
  tooltip: {
    fixed: {
      enabled: false
    },
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return ''
        }
      }
    },
    marker: {
      show: false
    }
  }
}


export const chart3Opts: Partial<ChartOptions> = {
  chart: {
    type: 'line',
    width: 140,
    height: 60,
    sparkline: {
      enabled: true
    }
  },
  colors: ["#ffbc00"],
  series: [{
    data: [47, 45, 74, 14, 56, 74, 14, 11, 7, 39, 82]
  }],
  stroke: {
    width: 2,
    curve: 'smooth'
  },
  markers: {
    size: 0
  },
  tooltip: {
    fixed: {
      enabled: false
    },
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return ''
        }
      }
    },
    marker: {
      show: false
    }
  }
}

export const chart7Opts: Partial<ChartOptions> = {
  chart: {
    type: 'bar',
    width: 100,
    height: 60,
    sparkline: {
      enabled: true
    }
  },
  plotOptions: {
    bar: {
      columnWidth: '80%'
    }
  },
  colors: ["#ffbc00"],
  series: [{
    data: [47, 45, 74, 14, 56, 74, 14, 11, 7, 39, 82]
  }],
  labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'],
  xaxis: {
    crosshairs: {
      width: 1
    },
  },
  tooltip: {
    fixed: {
      enabled: false
    },
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return ''
        }
      }
    },
    marker: {
      show: false
    }
  }
}


export const chart4Opts: Partial<ChartOptions> = {
  chart: {
    type: 'line',
    width: 140,
    height: 60,
    sparkline: {
      enabled: true
    }
  },
  colors: ["#fa5c7c"],
  series: [{
    data: [15, 75, 47, 65, 14, 2, 41, 54, 4, 27, 15]
  }],
  stroke: {
    width: 2,
    curve: 'smooth'
  },
  markers: {
    size: 0
  },
  tooltip: {
    fixed: {
      enabled: false
    },
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return ''
        }
      }
    },
    marker: {
      show: false
    }
  }
}

export const chart8Opts: Partial<ChartOptions> = {
  chart: {
    type: 'bar',
    width: 100,
    height: 60,
    sparkline: {
      enabled: true
    }
  },
  plotOptions: {
    bar: {
      columnWidth: '80%'
    }
  },
  colors: ["#fa5c7c"],
  series: [{
    data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
  }],
  labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'],
  xaxis: {
    crosshairs: {
      width: 1
    },
  },
  tooltip: {
    fixed: {
      enabled: false
    },
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return ''
        }
      }
    },
    marker: {
      show: false
    }
  }
}