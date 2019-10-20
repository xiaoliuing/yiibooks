<?php

namespace app\models;

use Yii;

class Ybooks extends \yii\db\ActiveRecord
{

    public static function tableName()
    {
        return 'ybooks';
    }


    public function rules()
    {
        return [
            [['b_name', 'b_autor', 'b_price'], 'required'],
            [['b_price'], 'integer'],
            [['b_add_time'], 'safe'],
            [['b_name'], 'string', 'max' => 12],
            [['b_autor'], 'string', 'max' => 8],
        ];
    }


    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'b_name' => '书名',
            'b_autor' => '作者',
            'b_price' => '价格',
            'b_add_time' => '创建时间',
        ];
    }
}
