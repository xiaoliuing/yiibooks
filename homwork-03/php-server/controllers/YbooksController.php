<?php

namespace app\controllers;

use Yii;
use app\models\Ybooks;
use app\models\YbooksSearch;
use yii\web\Controller;
use yii\rest\ActiveController;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;

/**
 * YbooksController implements the CRUD actions for Ybooks model.
 */
class YbooksController extends Controller
{
    public $enableCsrfValidation=false;
    /**
     * {@inheritdoc}
     */
    public function behaviors()
    {
        return [
            'verbs' => [
                'class' => VerbFilter::className(),
                'actions' => [
                    'delete' => ['POST'],
                ],
            ],
        ];
    }

    // 查询所有图书信息
    public function actionIndex()
    {
        $searchModel = new YbooksSearch();
        $dataProvider = $searchModel->search(Yii::$app->request->queryParams);
        return $dataProvider->getModels();
    }
    
    // 图书详情
    public function actionView($id)
    {
        $resModel = $this->findModel($id);
        $res = Array('error_id' => 0, 'data' => $resModel);
        if($resModel) {
            return $res;
        }
        $res['error_id'] = 1;
        return $res;
    }

    // 创建图书
    public function actionCreate()
    {
        $model = new Ybooks();
        $res = array('error_id' => 0);
        if ($model->load(Yii::$app->request->post()) && $model->save()) {
            return $res;
        }
        $res['error_id'] = 1;
        return $res;
    }

    // 更新图书信息
    public function actionUpdate($id)
    {
        $model = $this->findModel($id);
        $res = array('error_id' => 0);
        if ($model->load(Yii::$app->request->post()) && $model->save()) {
            return $res;
        }
        $res['error_id'] = 1;
        return $res;
    }

    // 删除图书
    public function actionDelete($id)
    {
        $res = array('error_id' => 0);
        if ($this->findModel($id)->delete()) {
            return $res;
        }
        $res['error_id'] = 1;
        return $res;
    }

    protected function findModel($id)
    {
        if (($model = Ybooks::findOne($id)) !== null) {
            return $model;
        }
        throw new NotFoundHttpException('The requested page does not exist.');
    }
}
