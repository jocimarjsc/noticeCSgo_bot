class CreateButtons {
  async execute() {
    const reply_markup = {
      one_time_keyboard: true,
      keyboard: [
        [
          {
            text: "๐ Ranking",
          },
          {
            text: "๐ฃ News",
          },
        ],
        [
          {
            text: "๐ฅ Live",
          },
          {
            text: "๐คผโโ๏ธ Matches",
          },
          {
            text: "๐จโ๐ฉโ๐งโ๐ฆ Teams",
          },
        ],
        ["โ Cancelar"],
      ],
    };

    return reply_markup;
  }
}

export default new  CreateButtons ;
