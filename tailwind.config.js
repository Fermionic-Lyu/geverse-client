const plugin = require('tailwindcss/plugin')

module.exports = {
  important: false,
  darkMode: 'class', // 模式[media（通过用户的操作系统进行控制），class （手动控制，HTML树中出现 dark类时起作用）]
  // 扫描（CSS 预处理器（如 SCSS，LESS）不支持扫描）
  content: {
    files: ['src/**/*.{vue,css,js}', 'public/**/*.html']
  },
  // 对哪些基础类进行编译，如果不需要编译某个基础类那么设置为 false 这样可以减小最终构建出的tailWindi.css的文件体积
  corePlugins: {
    float: false,
    filter: false,
    blur: false,
    brightness: false,
    contrast: false,
    dropShadow: false,
    grayscale: false,
    hueRotate: false,
    invert: false,
    saturate: false,
    sepia: false,
    backdropFilter: false,
    backdropBlur: false,
    backdropBrightness: false,
    backdropContrast: false,
    backdropGrayscale: false,
    backdropHueRotate: false,
    backdropInvert: false,
    backdropOpacity: false,
    backdropSaturate: false,
    backdropSepia: false,
    transform: false,
    transformOrigin: false,
    scale: false,
    rotate: false,
    translate: false,
    skew: false,
    mixBlendMode: false,
    backgroundBlendMode: false,
    ringOffsetColor: false,
    ringOffsetWidth: false,
    ringOpacity: false,
    overscrollBehavior: false,
    objectPosition: false,
    objectFit: false,
    isolation: false,
    boxDecorationBreak: false,
    fontVariantNumeric: false,
    /* divideWidth: false,
    divideColor: false,
    divideOpacity: false,
    divideStyle: false, */
    ringWidth: false,
    ringColor: false,
    transitionProperty: false,
    transitionDuration: false,
    transitionTimingFunction: false,
    transitionDelay: false,
    animation: false,
    appearance: false,
    placeContent: false,
    placeItems: false,
    placeSelf: false,
    placeholderColor: false,
    placeholderOpacity: false,
    fontSmoothing: false,
    textTransform: false,
    textOpacity: false
  },
  purge: {
    enabled: process.env.NODE_ENV === 'production', // 生产环境启用优化剔除未使用的原子类，类似 Tree Shaking 功能
    content: ['./src/**/*.vue'],
    layers: ['base', 'components', 'utilities'],
    safelist: [] // 保留某些原子类不被剔除
  },
  theme: {
    // 在 theme 属性的 extend 属性下添加的基础类会以扩展添加新值的方式来添加自定义基础类
    extend: {
      // w-1280px
      width: {
        '6px': '6px',
        '9px': '9px',
        '18px': '18px',
        '24px': '24px',
        '26px': '26px',
        '40px': '40px',
        '48px': '48px',
        '100px': '100px',
        '1280px': '1280px',
        '1440px': '1440px',
        '180px': '180px',
        '200px': '200px',
        '240px': '240px',
        '260px': '260px',
        '400px': '400px',
        '440px': '440px',
        '600px': '600px'
      },
      // h-28px
      height: {
        '9px': '9px',
        '16px': '16px',
        '18px': '18px',
        '20px': '20px',
        '22px': '22px',
        '24px': '24px',
        '26px': '26px',
        '28px': '28px',
        '40px': '40px',
        '42px': '42px',
        '48px': '48px',
        '60px': '60px',
        '64px': '64px',
        '100px': '100px',
        '200px': '200px',
        '300px': '300px',
        '400px': '400px',
        '420px': '420px',
        '540px': '540px',
        '560px': '560px'
      },
      // 文字尺寸，text-24px和!text-24px
      fontSize: {
        h1Px: ['20px', '28px'], // h1标题-行高1.4
        h2Px: ['18px', '24px'], // h2标题-行高1.333
        h3Px: ['16px', '24px'], // h3标题-行高1.5
        h4Px: ['14px', '24px'], // h4标题-行高1.714
        h5Px: ['13px', '22px'], // h5标题-行高1.69
        h6Px: ['12px', '20px'] // h6标题-行高1.66
        /* title14px: ['14px', '14px'], // div上的标题
        title16px: ['16px', '16px'],
        title18px: ['18px', '18px'] */
      },

      // 边框圆角，rounded-4px
      borderRadius: {
        '1px': ['1px'],
        '2px': ['2px'],
        '4px': ['4px'],
        '5px': ['5px'],
        '8px': ['8px'],
        '10px': ['10px'],
        '30px': ['30px'],
        circle: ['50%']
      },
      lineClamp: {
        7: '7',
        8: '8',
        9: '9',
        10: '10' // 省略10行
      }
    }
  },
  plugins: [
    plugin(({ addBase }) => {
      const newBase = {
        'html,body': {
          width: '100%',
          height: '100%',
          wordBreak: 'break-all' /* 允许在单词内换行 */,
          wordWrap: 'break-word' /* 在长单词或 URL 地址内部进行换行 */,
          fontSize: '62.5%' // 1em=10px、1rem=10px，浏览器默认：1em=16px、1rem=16px 这里方便计算使用 62.5% 的比例 (10/16*100%)
        },
        body: {
          // padding: 0,
          margin: 0,
          // overflow: 'hidden',
          overflowX: 'auto',
          overflowY: 'hidden',
          lineHeight: 1.5, // 行高-1.5常规
          fontStyle: 'normal', // 默认
          fontWeight: 400,
          color: 'rgba(0, 0, 0, 0.85)',
          textAlign: 'left',
          textDecoration: 'none',
          listStyleType: 'none',
          backgroundColor: '#F5F7FA',
          outline: 0
        }
      }
      // 注册全局base样式
      addBase(newBase)
    }),
    plugin(function ({ addUtilities }) {
      addUtilities(
        [
          {
            '.b1': {
              border: '1px solid blue',
              'box-sizing': 'border-box'
            },
            '.b2': {
              border: '1px solid black',
              'box-sizing': 'border-box'
            },
            '.b3': {
              border: '1px solid white',
              'box-sizing': 'border-box'
            },
            '.b4': {
              border: '1px solid yellow',
              'box-sizing': 'border-box'
            },
            '.b5': {
              border: '1px solid pink',
              'box-sizing': 'border-box'
            }
          }
        ],
        {
          variants: ['hover'] // 变体
        }
      )
    }),
    plugin(function ({ addUtilities }) {
      addUtilities(
        [
          {
            '.text12Px': {
              fontSize: '12px'
            },
            /* '.text12Rem': {
              fontSize: '0.625rem' // 12/(1920/100) = 0.625，如果没有明确手动设置html的fontSize属性那么使用上面`newBase`基础设置中的`fontSize: '62.5%'`
            }, */
            '.text13Px': {
              fontSize: '13px'
            },
            '.text14Px': {
              fontSize: '14px'
            },
            '.text16Px': {
              fontSize: '16px'
            },
            '.text15Px': {
              fontSize: '15px'
            },
            '.text17Px': {
              fontSize: '17px'
            },
            '.text18Px': {
              fontSize: '18px'
            },
            '.text20Px': {
              fontSize: '20px'
            },
            '.text22Px': {
              fontSize: '22px'
            },
            '.text24Px': {
              fontSize: '24px'
            },
            '.text26Px': {
              fontSize: '26px'
            },
            '.text28Px': {
              fontSize: '28px'
            },
            '.text30Px': {
              fontSize: '30px'
            },
            '.text32Px': {
              fontSize: '32px'
            },
            '.text34Px': {
              fontSize: '34px'
            },
            '.text56Px': {
              fontSize: '56px'
            }
          }
        ],
        {
          variants: ['responsive', 'elder', 'important'] // 变体
        }
      )
      addUtilities([
        {
          '.normal-400': {
            fontWeight: 400,
            fontStyle: 'normal',
            lineHeight: 1.5
          },
          '.normal-none-400': {
            fontWeight: 400,
            fontStyle: 'normal',
            lineHeight: 1
          },
          '.normal-relaxed-400': {
            fontWeight: 400,
            fontStyle: 'normal',
            lineHeight: 1.7
          },
          '.normal-close-400': {
            fontWeight: 400,
            fontStyle: 'normal',
            lineHeight: 1.15
          },
          '.normal-near-400': {
            fontWeight: 400,
            fontStyle: 'normal',
            lineHeight: 1.57
          },
          '.normal-500': {
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: 1.5
          },
          '.normal-relaxed-500': {
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: 1.7
          },
          '.normal-600': {
            fontStyle: 'normal',
            fontWeight: 600,
            lineHeight: 1.5
          },
          '.normal-tight-600': {
            fontStyle: 'normal',
            fontWeight: 600,
            lineHeight: 1.25
          }
        }
      ])
    }),
    // https://www.npmjs.com/package/@tailwindcss/line-clamp
    require('tailwindcss-important')() // 复合属性使用!无效（`!row-center`），有效：!text-green-700
  ]
}
