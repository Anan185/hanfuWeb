new Vue({
    el: '#Hanfu',
    data: {
      // 汉服形制数据
      categories: [
        {
          name: '衣裳',
        defaultDetails: {
          images: [
            { src: '图片/衮冕服来自小红书网页版.jpg', description: '唐代帝王最隆重的大礼服称为“衮冕”' },
            { src: '图片/晋制.png', description: '晋制交领类交窬裙' },
            { src: '图片/隋.png', description: '隋制珪衣盛装' },
            { src: '图片/圆领.png', description: '唐制圆领袍八破裙' },
            { src: '图片/交领.jpg', description: '魏晋制交领襦裙' },
            { src: '图片/明.jpg', description: '明制琵琶袖方领短袄' },
            { src: '图片/立领.jpg', description: '明制立领斜长衫主腰马面裙' }
          ]
        },
          // subcategories: [
          //   { name: '上衣', details: { image: './汉服-3.png', description: '衣裳是汉服的一种形制，通常宽松、流畅。'  }},
          //   { name: '下裳', details: { image: 'images/shenyi.jpg', description: '深衣是传统汉服的一种，特点是宽松且多层。' } },
          // ],
        },
        {
          name: '深衣',
          defaultDetails: {
            images: [
              { src: '图片/曲裾.jpg', description: '唐代帝王最隆重的大礼服称为“衮冕”' },
              { src: '图片/直裾.jpg', description: '晋制交领类交窬裙' },
              { src: '图片/隋.png', description: '隋制珪衣盛装' },
              { src: '图片/圆领.png', description: '唐制圆领袍八破裙' },
              { src: '图片/交领.jpg', description: '魏晋制交领襦裙' },
              { src: '图片/明.jpg', description: '明制琵琶袖方领短袄' },
              { src: '图片/立领.jpg', description: '明制立领斜长衫主腰马面裙' }
            ]
          },
        },
        
        {
          name: '襦裙',
          defaultDetails: {
            images: [
              { src: '图片/齐胸.png', description: '唐代帝王最隆重的大礼服称为“衮冕”' },
              { src: '图片/汉服1.jpg', description: '晋制交领类交窬裙' },
              { src: '图片/隋.png', description: '隋制珪衣盛装' },
              { src: '图片/圆领.png', description: '唐制圆领袍八破裙' },
              { src: '图片/交领.jpg', description: '魏晋制交领襦裙' },
              { src: '图片/明.jpg', description: '明制琵琶袖方领短袄' },
              { src: '图片/立领.jpg', description: '明制立领斜长衫主腰马面裙' }
            ]
          },
        },
        {
          name: '袍服',
          defaultDetails: {
            images: [
              { src: '图片/衮冕服来自小红书网页版.jpg', description: '唐代帝王最隆重的大礼服称为“衮冕”' },
              { src: '图片/晋制.png', description: '晋制交领类交窬裙' },
              { src: '图片/隋.png', description: '隋制珪衣盛装' },
              { src: '图片/圆领.png', description: '唐制圆领袍八破裙' },
              { src: '图片/交领.jpg', description: '魏晋制交领襦裙' },
              { src: '图片/明.jpg', description: '明制琵琶袖方领短袄' },
              { src: '图片/立领.jpg', description: '明制立领斜长衫主腰马面裙' }
            ]
          },
        }
      ],
      selectedCategory: null,
    selectedSubCategory: null,
    currentImages: []  // 用来存储当前类别或子类别的图片和描述
  },
  methods: {
    selectCategory(category) {
      this.selectedCategory = category.name;
      this.selectedSubCategory = null;

      // 如果类别有默认的图片和描述，直接显示
      if (category.defaultDetails) {
        this.currentImages = category.defaultDetails.images;
      } else {
        // 如果类别没有默认详情，默认显示第一个子类的内容
        if (category.subcategories && category.subcategories.length > 0) {
          this.selectSubCategory(category.subcategories[0]);
        }
      }
    },
    selectSubCategory(subCategory) {
      this.selectedSubCategory = subCategory.name;

      // 更新当前图片和描述
      this.currentImages = subCategory.details;
    }
  }
});